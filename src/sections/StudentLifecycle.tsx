
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const StudentLifecycle = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t('studentLifecycle.enrollment.title'),
      description: t('studentLifecycle.enrollment.description'),
      icon: '📝',
      color: 'konneqt-blue'
    },
    {
      title: t('studentLifecycle.courseChange.title'),
      description: t('studentLifecycle.courseChange.description'),
      icon: '🔄',
      color: 'konneqt-purple'
    },
    {
      title: t('studentLifecycle.graduation.title'),
      description: t('studentLifecycle.graduation.description'),
      icon: '🎓',
      color: 'konneqt-green'
    },
    {
      title: t('studentLifecycle.semester.title'),
      description: t('studentLifecycle.semester.description'),
      icon: '📅',
      color: 'konneqt-orange'
    },
    {
      title: t('studentLifecycle.exchange.title'),
      description: t('studentLifecycle.exchange.description'),
      icon: '✈️',
      color: 'konneqt-blue'
    },
    {
      title: t('studentLifecycle.emergency.title'),
      description: t('studentLifecycle.emergency.description'),
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
              {t('studentLifecycle.title')} <span className="gradient-text">{t('studentLifecycle.title.student')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('studentLifecycle.description')}
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
            <h3 className="text-2xl font-bold mb-4">{t('studentLifecycle.instant.title')}</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('studentLifecycle.instant.description')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StudentLifecycle;
