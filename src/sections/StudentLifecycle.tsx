
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const StudentLifecycle = () => {
  const events = [
    {
      title: 'Matrícula',
      description: 'Provisiona e-mail, LMS, Wi-Fi, biblioteca e laboratórios',
      icon: '📝',
      color: 'konneqt-blue'
    },
    {
      title: 'Mudança de curso',
      description: 'Atualiza grupos e permissões automaticamente',
      icon: '🔄',
      color: 'konneqt-purple'
    },
    {
      title: 'Graduação',
      description: 'Remove acessos acadêmicos e migra para ex-aluno',
      icon: '🎓',
      color: 'konneqt-green'
    },
    {
      title: 'Novo semestre',
      description: '1.500 alunos provisionados automaticamente, sem erros',
      icon: '📅',
      color: 'konneqt-orange'
    },
    {
      title: 'Intercambistas',
      description: 'Acessos temporários com expiração automática',
      icon: '✈️',
      color: 'konneqt-blue'
    },
    {
      title: 'Suspensão de emergência',
      description: 'Bloqueio imediato e auditável de todos os acessos',
      icon: '🚨',
      color: 'red-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ciclo de Vida do <span className="gradient-text">Estudante</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Automação completa em todas as fases da jornada acadêmica
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg group dark:border-konneqt-purple/30 dark:hover:border-konneqt-purple/60">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">{event.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 bg-gradient-to-r from-konneqt-green/10 to-konneqt-blue/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Automação Instantânea</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Todos os eventos do ciclo de vida são processados automaticamente, 
              garantindo que os estudantes tenham acesso aos recursos certos no momento certo.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StudentLifecycle;
