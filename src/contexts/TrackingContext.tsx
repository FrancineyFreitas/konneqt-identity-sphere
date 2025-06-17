
import React, { createContext, useContext, useEffect, useState } from 'react';

interface TrackingConfig {
  googleAnalyticsId: string;
  googleTagManagerId: string;
  facebookPixelId: string;
  linkedinPartnerId: string;
  googleSearchConsoleId: string;
}

interface TrackingContextType {
  config: TrackingConfig | null;
  updateConfig: (config: TrackingConfig) => void;
  isConfigured: boolean;
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

export const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<TrackingConfig | null>(null);

  useEffect(() => {
    const savedConfig = localStorage.getItem('trackingConfig');
    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      setConfig(parsedConfig);
      loadTrackingScripts(parsedConfig);
    }
  }, []);

  const updateConfig = (newConfig: TrackingConfig) => {
    setConfig(newConfig);
    localStorage.setItem('trackingConfig', JSON.stringify(newConfig));
    loadTrackingScripts(newConfig);
  };

  const loadTrackingScripts = (trackingConfig: TrackingConfig) => {
    // Remove existing scripts
    removeExistingScripts();

    // Google Analytics 4
    if (trackingConfig.googleAnalyticsId) {
      const gaScript = document.createElement('script');
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingConfig.googleAnalyticsId}`;
      gaScript.async = true;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement('script');
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingConfig.googleAnalyticsId}');
      `;
      document.head.appendChild(gaConfigScript);
    }

    // Google Tag Manager
    if (trackingConfig.googleTagManagerId) {
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${trackingConfig.googleTagManagerId}');
      `;
      document.head.appendChild(gtmScript);

      // GTM NoScript
      const gtmNoScript = document.createElement('noscript');
      gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${trackingConfig.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.appendChild(gtmNoScript);
    }

    // Facebook Pixel
    if (trackingConfig.facebookPixelId) {
      const fbScript = document.createElement('script');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${trackingConfig.facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }

    // LinkedIn Insight Tag
    if (trackingConfig.linkedinPartnerId) {
      const linkedinScript = document.createElement('script');
      linkedinScript.innerHTML = `
        _linkedin_partner_id = "${trackingConfig.linkedinPartnerId}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `;
      document.head.appendChild(linkedinScript);

      const linkedinInsightScript = document.createElement('script');
      linkedinInsightScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
      linkedinInsightScript.async = true;
      document.head.appendChild(linkedinInsightScript);
    }

    // Google Search Console verification
    if (trackingConfig.googleSearchConsoleId) {
      const searchConsoleMetaExists = document.querySelector('meta[name="google-site-verification"]');
      if (!searchConsoleMetaExists) {
        const searchConsoleMeta = document.createElement('meta');
        searchConsoleMeta.name = 'google-site-verification';
        searchConsoleMeta.content = trackingConfig.googleSearchConsoleId;
        document.head.appendChild(searchConsoleMeta);
      }
    }
  };

  const removeExistingScripts = () => {
    // Remove existing tracking scripts
    const scripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="gtag"], script[src*="fbevents"], script[src*="insight.min.js"]');
    scripts.forEach(script => script.remove());
    
    // Remove existing meta tags
    const searchConsoleMeta = document.querySelector('meta[name="google-site-verification"]');
    if (searchConsoleMeta) searchConsoleMeta.remove();
  };

  return (
    <TrackingContext.Provider value={{ 
      config, 
      updateConfig, 
      isConfigured: !!config 
    }}>
      {children}
    </TrackingContext.Provider>
  );
};

export const useTracking = () => {
  const context = useContext(TrackingContext);
  if (context === undefined) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};

// Tracking events helper functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
  
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', { form_name: formName });
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', { button_name: buttonName });
};
