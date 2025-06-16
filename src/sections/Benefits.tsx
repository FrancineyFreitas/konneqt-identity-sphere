
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('benefits.automation.title'),
      items: [
        t('benefits.automation.realtime'),
        t('benefits.automation.deprovisioning'),
        t('benefits.automation.sync')
      ],
      icon: '🤖',
      color: 'konneqt-blue'
    },
    {
      title: t('benefits.security.title'),
      items: [
        t('benefits.security.rbac'),
        t('benefits.security.audit'),
        t('benefits.security.compliance')
      ],
      icon: '🔒',
      color: 'konneqt-purple'
    },
    {
      title: t('benefits.efficiency.title'),
      items: [
        t('benefits.efficiency.time'),
        t('benefits.efficiency.errors'),
        t('benefits.efficiency.scalability')
      ],
      icon: '📈',
      color: 'konneqt-green'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('benefits.title')} <span className="gradient-text">{t('benefits.title.institutions')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border-2 border-transparent hover:border-konneqt-blue/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
