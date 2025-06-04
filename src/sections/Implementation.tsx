
import ScrollReveal from '../components/ScrollReveal';

const Implementation = () => {
  const phases = [
    {
      phase: 'Fase 1',
      title: 'Análise',
      duration: '2–4 semanas',
      icon: '🔍',
      color: 'konneqt-blue'
    },
    {
      phase: 'Fase 2',
      title: 'Configuração',
      duration: '3–6 semanas',
      icon: '⚙️',
      color: 'konneqt-purple'
    },
    {
      phase: 'Fase 3',
      title: 'Testes',
      duration: '2–3 semanas',
      icon: '🧪',
      color: 'konneqt-green'
    },
    {
      phase: 'Fase 4',
      title: 'Go-Live',
      duration: '1–2 semanas',
      icon: '🚀',
      color: 'konneqt-orange'
    }
  ];

  const bestPractices = [
    'Desabilitar SCIM "create" no IdP',
    'Usar SSO com provisionamento Just-in-Time',
    'Validar e-mails e identificadores persistentes',
    'Migração gradual e backup com rollback'
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fases de <span className="gradient-text">Implementação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo estruturado para garantir uma implementação bem-sucedida
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {phases.map((phase, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-card border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{phase.icon}</div>
                <div className="text-sm font-semibold text-konneqt-blue mb-2">{phase.phase}</div>
                <h3 className="text-lg font-bold mb-3">{phase.title}</h3>
                <div className="bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 rounded-lg px-3 py-2">
                  <span className="text-sm font-medium">{phase.duration}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-konneqt-green/10 to-konneqt-blue/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Boas Práticas</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-konneqt-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm">{practice}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-4 bg-white/50 dark:bg-black/20 rounded-full px-6 py-3">
                <span className="text-xl">⚡</span>
                <span className="font-semibold">Implementação rápida e segura</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Implementation;
