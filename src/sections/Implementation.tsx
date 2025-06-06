
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default Implementation;
