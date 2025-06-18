
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('benefits.automation.title'),
      items: [
        t('benefits.automation.realtime'),
        t('benefits.automation.deprovisioning'),
        t('benefits.automation.sync')
      ],
      color: 'konneqt-blue'
    },
    {
      title: t('benefits.security.title'),
      items: [
        t('benefits.security.rbac'),
        t('benefits.security.audit'),
        t('benefits.security.compliance')
      ],
      color: 'konneqt-purple'
    },
    {
      title: t('benefits.efficiency.title'),
      items: [
        t('benefits.efficiency.time'),
        t('benefits.efficiency.errors'),
        t('benefits.efficiency.scalability')
      ],
      color: 'konneqt-green'
    }
  ];

  const metrics = [
    {
      value: "5 min",
      label: t('benefits.metrics.provisioning')
    },
    {
      value: "100%",
      label: t('benefits.metrics.compliance')
    },
    {
      value: "95%",
      label: t('benefits.metrics.reduction')
    },
    {
      value: "10+",
      label: t('benefits.metrics.systems')
    }
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
        {/* Hero Image with Overlay Text */}
        <ScrollReveal>
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src="/lovable-uploads/36cea072-2297-4153-83d5-486bf4c21b75.png" 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay matching page color palette */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-900/60 to-slate-800/70"></div>
              
              {/* Text overlay - positioned at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end items-center text-center px-6 pb-12">
                <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-inter">
                  <span className="font-light">{t('benefits.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('benefits.title.institutions')}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-4xl font-inter">
                  {t('benefits.description')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Key Metrics Card */}
        <ScrollReveal delay={200}>
          <Card className="border border-green-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-green-400 transition-all duration-300 hover:shadow-lg mb-16">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    {/* Value with animated background */}
                    <div className="relative mb-3">
                      <div 
                        className="text-3xl md:text-4xl font-bold mb-2 font-inter relative z-10"
                        style={{ color: '#1cd989' }}
                      >
                        {metric.value}
                      </div>
                      
                      {/* Animated background circle */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-20 animate-pulse"
                        style={{ backgroundColor: '#1cd989', animationDelay: `${index * 300}ms` }}
                      ></div>
                    </div>
                    
                    {/* Label */}
                    <p className="text-slate-300 text-sm font-inter">
                      {metric.label}
                    </p>
                    
                    {/* Animated progress bar */}
                    <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full animate-pulse"
                        style={{
                          backgroundColor: '#1cd989',
                          width: '100%',
                          animationDelay: `${index * 400}ms`,
                          animationDuration: '2s'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white font-inter">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-300 font-inter">
                        <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
