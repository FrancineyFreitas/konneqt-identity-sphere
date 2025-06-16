
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      icon: '📊',
      color: 'konneqt-blue'
    },
    {
      number: '2',
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      icon: '⚙️',
      color: 'konneqt-purple'
    },
    {
      number: '3',
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      icon: '🎯',
      color: 'konneqt-green'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('howItWorks.title')} <span className="gradient-text">{t('howItWorks.title.works')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 dark:border-konneqt-orange/30 dark:hover:border-konneqt-orange/60 h-full flex flex-col items-center justify-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-konneqt-${step.color} to-konneqt-${step.color}/80 mb-6 relative`}>
                    <div className="absolute inset-0.5 bg-black dark:bg-black rounded-full flex items-center justify-center">
                      <span className="text-[White] dark:text-[#1ee391] text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-konneqt-blue/10 to-konneqt-green/10 rounded-full px-8 py-4">
              <span className="text-2xl">🚀</span>
              <span className="text-lg font-semibold">{t('howItWorks.realtime')}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
