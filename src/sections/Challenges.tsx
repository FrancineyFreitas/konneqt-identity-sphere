
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';

const Challenges = () => {
  const challenges = [
    {
      title: 'Volume massivo de usuários',
      description: '10.000+ alunos, 500+ professores, 200+ funcionários',
      icon: '👥',
      color: 'konneqt-blue'
    },
    {
      title: 'Sazonalidade extrema',
      description: '85% dos acessos criados em 2 semanas',
      icon: '📈',
      color: 'konneqt-purple'
    },
    {
      title: 'Diversidade de perfis',
      description: 'Graduação, pós-graduação, intercâmbio, visitantes',
      icon: '🎓',
      color: 'konneqt-green'
    }
  ];

  const impacts = [
    {
      metric: '72%',
      description: 'Tempo gasto em tarefas manuais',
      color: 'text-red-500'
    },
    {
      metric: '45%',
      description: 'Erros em provisionamento manual',
      color: 'text-orange-500'
    },
    {
      metric: '3 a 5 dias',
      description: 'Dias para provisionar novos usuários',
      color: 'text-yellow-500'
    },
    {
      metric: 'US$ 50 mil',
      description: 'Custo anual de gestão manual',
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Desafios na <span className="gradient-text">Educação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instituições educacionais enfrentam desafios únicos na gestão de identidades
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg dark:border-konneqt-blue/30 dark:hover:border-konneqt-blue/60">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-700 dark:text-red-400">
              Impactos Negativos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${impact.color}`}>
                    {impact.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Challenges;
