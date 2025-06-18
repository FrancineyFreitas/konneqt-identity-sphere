import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: 'konneqt-blue'
    },
    {
      number: '2',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: 'konneqt-purple'
    },
    {
      number: '3',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: 'konneqt-green'
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
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white font-inter">
              <span className="font-light">{t('howItWorks.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('howItWorks.title.works')}</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-inter">
              {t('howItWorks.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-konneqt-blue via-konneqt-purple to-konneqt-green transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-slate-800/30 backdrop-blur-sm transition-all duration-300 rounded-2xl p-8 text-center shadow-lg h-full flex flex-col items-center justify-center" style={{ border: '1px solid #2f2f2f' }}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-konneqt-${step.color} to-konneqt-${step.color}/80 mb-6 relative`}>
                    <div className="absolute inset-0.5 bg-black dark:bg-black rounded-full flex items-center justify-center">
                      <span className="text-[White] dark:text-[#1ee391] text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white font-inter">{step.title}</h3>
                  
                  <p className="text-slate-300 font-inter">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-transparent rounded-full px-8 py-4">
              <span className="text-lg font-semibold text-white font-inter">{t('howItWorks.realtime')}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
