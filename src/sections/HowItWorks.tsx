
import ScrollReveal from '../components/ScrollReveal';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Fonte de dados',
      description: 'SIS, RH ou CRM',
      icon: '📊',
      color: 'konneqt-blue'
    },
    {
      number: '2',
      title: 'Gateway QSCIM',
      description: 'Processamento e mapeamento SCIM',
      icon: '⚙️',
      color: 'konneqt-purple'
    },
    {
      number: '3',
      title: 'Sistemas de destino',
      description: 'Azure AD, Google, Okta, Active Directory',
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
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um fluxo simples e eficiente em três etapas
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Linha conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-konneqt-blue via-konneqt-purple to-konneqt-green transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-card border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-konneqt-${step.color} to-konneqt-${step.color}/80 text-white text-2xl font-bold mb-6`}>
                    {step.number}
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
              <span className="text-lg font-semibold">Provisionamento em tempo real</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
