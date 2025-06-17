
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

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Challenges;
