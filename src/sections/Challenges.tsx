
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Challenges = () => {
  const { t } = useLanguage();

  const challenges = [
    {
      title: t('challenges.volume.title'),
      description: t('challenges.volume.description'),
      color: 'konneqt-blue'
    },
    {
      title: t('challenges.seasonality.title'),
      description: t('challenges.seasonality.description'),
      color: 'konneqt-purple'
    },
    {
      title: t('challenges.diversity.title'),
      description: t('challenges.diversity.description'),
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
        {/* Hero Image with Overlay Text */}
        <ScrollReveal>
          <div className="relative mb-16 rounded-2xl overflow-hidden">
            <div className="relative h-96 md:h-[500px]">
              <img 
                src="/lovable-uploads/2ac37b45-98fe-4c74-8583-bea89e0fc22d.png" 
                alt="Student studying" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay matching page color palette */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-900/60 to-slate-800/70"></div>
              
              {/* Text overlay - moved to bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end items-center text-center px-6 pb-12">
                <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-inter">
                  {t('challenges.title')} <span className="font-bold" style={{ color: '#1de28f' }}>{t('challenges.title.education')}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-4xl font-inter">
                  {t('challenges.description')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Financial Data Card */}
        <ScrollReveal delay={200}>
          <Card className="border border-red-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-red-400 transition-all duration-300 hover:shadow-lg mb-16">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Text content */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-inter">
                    {t('challenges.scenario.title')}
                  </h2>
                  
                  <div className="mb-8">
                    <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2 font-inter">
                      R$279M
                    </div>
                    <p className="text-slate-300 font-inter">
                      {t('challenges.scenario.total')}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <span className="text-slate-300 font-inter">
                        {t('challenges.scenario.operational')}
                      </span>
                      <span className="text-xl font-bold text-blue-400 font-inter">R$156M</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <span className="text-slate-300 font-inter">
                        {t('challenges.scenario.lost')}
                      </span>
                      <span className="text-xl font-bold text-yellow-400 font-inter">R$89M</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                      <span className="text-slate-300 font-inter">
                        {t('challenges.scenario.compliance')}
                      </span>
                      <span className="text-xl font-bold text-purple-400 font-inter">R$34M</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Animated graphs */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  {/* Main graph for R$279M */}
                  <div className="relative w-full max-w-xs h-40">
                    <div className="absolute inset-0 bg-slate-700/20 rounded-lg border border-slate-600/30 p-4">
                      <div className="h-full relative">
                        {/* Grid lines */}
                        <div className="absolute inset-0 grid grid-rows-4 opacity-20">
                          <div className="border-b border-slate-500"></div>
                          <div className="border-b border-slate-500"></div>
                          <div className="border-b border-slate-500"></div>
                          <div className="border-b border-slate-500"></div>
                        </div>
                        
                        {/* Animated upward trending line */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ef4444" />
                              <stop offset="50%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#dc2626" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M20,100 Q60,80 100,40 Q140,20 180,10"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="animate-pulse"
                            style={{
                              strokeDasharray: "300",
                              strokeDashoffset: "300",
                              animation: "draw 3s ease-in-out infinite alternate"
                            }}
                          />
                          {/* Data points */}
                          <circle cx="20" cy="100" r="4" fill="#3b82f6" className="animate-pulse delay-500" />
                          <circle cx="100" cy="40" r="4" fill="#f59e0b" className="animate-pulse delay-1000" />
                          <circle cx="180" cy="10" r="4" fill="#dc2626" className="animate-pulse delay-1500" />
                        </svg>
                        
                        {/* Value indicator */}
                        <div className="absolute top-2 right-2 bg-red-500/20 border border-red-500/40 rounded px-2 py-1">
                          <span className="text-xs font-bold text-red-400 font-inter">↗ R$279M</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary graphs container */}
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                    {/* Graph for R$156M */}
                    <div className="relative h-24">
                      <div className="absolute inset-0 bg-slate-700/20 rounded-lg border border-slate-600/30 p-2">
                        <div className="h-full relative">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                            <path
                              d="M10,50 Q30,40 50,25 Q70,15 90,5"
                              stroke="#3b82f6"
                              strokeWidth="2"
                              fill="none"
                              className="animate-pulse"
                            />
                            <circle cx="90" cy="5" r="2" fill="#3b82f6" className="animate-pulse delay-700" />
                          </svg>
                          <div className="absolute bottom-1 right-1 bg-blue-500/20 border border-blue-500/40 rounded px-1 py-0.5">
                            <span className="text-xs font-bold text-blue-400 font-inter">R$156M</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Graph for R$89M */}
                    <div className="relative h-24">
                      <div className="absolute inset-0 bg-slate-700/20 rounded-lg border border-slate-600/30 p-2">
                        <div className="h-full relative">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60">
                            <path
                              d="M10,50 Q30,35 50,20 Q70,10 90,8"
                              stroke="#f59e0b"
                              strokeWidth="2"
                              fill="none"
                              className="animate-pulse"
                            />
                            <circle cx="90" cy="8" r="2" fill="#f59e0b" className="animate-pulse delay-900" />
                          </svg>
                          <div className="absolute bottom-1 right-1 bg-yellow-500/20 border border-yellow-500/40 rounded px-1 py-0.5">
                            <span className="text-xs font-bold text-yellow-400 font-inter">R$89M</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <Card className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center min-h-[200px] flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-3 text-white font-inter">{challenge.title}</h3>
                  <p className="text-slate-300 font-inter">{challenge.description}</p>
                  <div className={`mt-4 h-1 w-12 mx-auto rounded-full bg-${challenge.color} opacity-70`}></div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Challenges;
