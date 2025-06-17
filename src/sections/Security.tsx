
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Security = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      title: t('security.rbac.title'),
      description: t('security.rbac.description'),
      color: 'konneqt-blue'
    },
    {
      title: t('security.audit.title'),
      description: t('security.audit.description'),
      color: 'konneqt-purple'
    },
    {
      title: t('security.tls.title'),
      description: t('security.tls.description'),
      color: 'konneqt-green'
    },
    {
      title: t('security.aes.title'),
      description: t('security.aes.description'),
      color: 'konneqt-orange'
    }
  ];

  const compliance = [
    { standard: 'FERPA', description: t('security.compliance.ferpa') },
    { standard: 'LGPD', description: t('security.compliance.lgpd') },
    { standard: 'GDPR', description: t('security.compliance.gdpr') },
    { standard: 'SOC 2', description: t('security.compliance.soc2') }
  ];

  const securityLayers = [
    t('security.layers.mfa'),
    t('security.layers.rbac'),
    t('security.layers.encryption'),
    t('security.layers.monitoring'),
    t('security.layers.logs')
  ];

  const metrics = [
    { metric: '99,9%', label: t('security.metrics.availability') },
    { metric: '<1s', label: t('security.metrics.response') }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full animate-pulse delay-2000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 rounded-full animate-pulse delay-500" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 rounded-full animate-pulse delay-700" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 rounded-full animate-pulse delay-1200" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full animate-pulse delay-800" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-16 left-2/3 w-1 h-1 rounded-full animate-pulse delay-400" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-52 left-1/6 w-1 h-1 rounded-full animate-pulse delay-900" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-16 left-3/4 w-1 h-1 rounded-full animate-pulse delay-600" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-48 right-1/6 w-1 h-1 rounded-full animate-pulse delay-1100" style={{ backgroundColor: '#637ef2' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white font-inter">
              <span className="font-light">{t('security.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('security.title.compliance')}</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-inter">
              {t('security.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg rounded-2xl p-6 shadow-lg">
                <div className="text-center">
                  <h3 className="text-sm font-semibold mb-2 text-white font-inter">{feature.title}</h3>
                  <p className="text-xs text-slate-300 font-inter">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white font-inter">{t('security.compliance.title')}</h3>
              <div className="space-y-4">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-konneqt-blue to-konneqt-purple rounded-lg flex items-center justify-center text-white font-bold">
                      {item.standard.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-inter">{item.standard}</h4>
                      <p className="text-sm text-slate-300 font-inter">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white font-inter">{t('security.layers.title')}</h3>
              <div className="space-y-3">
                {securityLayers.map((layer, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                    <span className="text-sm text-slate-300 font-inter">{layer}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-konneqt-green font-inter">{metric.metric}</div>
                    <div className="text-sm text-slate-300 font-inter">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Security;
