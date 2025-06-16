
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Challenges = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      title: t('challenges.volume.title'),
      description: t('challenges.volume.description'),
      icon: '👥',
      color: 'konneqt-blue'
    },
    {
      title: t('challenges.seasonality.title'),
      description: t('challenges.seasonality.description'),
      icon: '📈',
      color: 'konneqt-purple'
    },
    {
      title: t('challenges.diversity.title'),
      description: t('challenges.diversity.description'),
      icon: '🎓',
      color: 'konneqt-green'
    }
  ];

  const impacts = [
    {
      metric: '72%',
      description: t('challenges.impacts.time'),
      color: 'text-red-500'
    },
    {
      metric: '45%',
      description: t('challenges.impacts.errors'),
      color: 'text-orange-500'
    },
    {
      metric: '3 a 5 dias',
      description: t('challenges.impacts.days'),
      color: 'text-yellow-500'
    },
    {
      metric: 'US$ 50 mil',
      description: t('challenges.impacts.cost'),
      color: 'text-red-600'
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('challenges.title')} <span className="gradient-text">{t('challenges.title.education')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('challenges.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg dark:border-konneqt-blue/30 dark:hover:border-konneqt-blue/60">
                <CardContent className="p-6 text-center min-h-[200px] flex flex-col justify-center">
                  <div className="text-4xl mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                  <div className={`mt-4 h-1 w-12 mx-auto rounded-full bg-${challenge.color} opacity-70`}></div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-700 dark:text-red-400">
              {t('challenges.impacts.title')}
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
