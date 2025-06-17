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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-40 right-20 w-1 h-1 rounded-full animate-pulse delay-1000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 rounded-full animate-pulse delay-2000" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 rounded-full animate-pulse delay-500" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 rounded-full animate-pulse delay-300" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 rounded-full animate-pulse delay-700" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 rounded-full animate-pulse delay-1200" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full animate-pulse delay-800" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-16 left-2/3 w-1 h-1 rounded-full animate-pulse delay-400" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute top-52 left-1/6 w-1 h-1 rounded-full animate-pulse delay-900" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-16 left-3/4 w-1 h-1 rounded-full animate-pulse delay-600" style={{ backgroundColor: '#637ef2' }}></div>
        <div className="absolute bottom-48 right-1/6 w-1 h-1 rounded-full animate-pulse delay-1100" style={{ backgroundColor: '#637ef2' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-white font-inter">
              {t('challenges.title')} <span style={{ color: '#1de28f' }}>{t('challenges.title.education')}</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-inter">
              {t('challenges.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center min-h-[200px] flex flex-col justify-center">
                  <div className="text-4xl mb-4">
                    {challenge.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white font-inter">{challenge.title}</h3>
                  <p className="text-slate-300 font-inter">{challenge.description}</p>
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
