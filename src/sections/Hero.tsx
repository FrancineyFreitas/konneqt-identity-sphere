
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
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

      <div className="w-full py-12 md:py-24 px-4 relative z-10 pt-32 md:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
            {/* Main content - centered */}
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <ScrollReveal>
                <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-3 md:px-4 py-2 mb-6 backdrop-blur-sm">
                  <span className="text-base md:text-lg">⚡</span>
                  <span className="text-xs md:text-sm font-medium text-slate-300 font-inter">{t('hero.badge')}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] md:leading-[1.2] text-white font-inter">
                  <span className="font-inter" style={{ color: '#1de28f' }}>{t('hero.title.qscim')}</span> <span className="text-white font-light">{t('hero.title.for')}</span>{' '}
                  <span style={{ color: '#1de28f' }}>{t('hero.title.schools')}</span> <span className="text-white font-light">{t('hero.title.and')}</span>{' '}
                  <span style={{ color: '#1de28f' }}>{t('hero.title.universities')}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h2 className="text-lg md:text-xl lg:text-2xl text-slate-400 font-medium font-inter mt-8">
                  Revolutionizing Identity Provisioning
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-inter max-w-3xl mx-auto">
                  {t('hero.description')}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  <Badge className="bg-slate-800 border border-green-500/30 text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm hover:bg-green-500/10 font-inter">
                    {t('hero.badge.automation')}
                  </Badge>
                  <Badge className="bg-slate-800 border border-blue-500/30 text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm hover:bg-blue-500/10 font-inter">
                    {t('hero.badge.security')}
                  </Badge>
                  <Badge className="bg-slate-800 border border-purple-500/30 text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm hover:bg-purple-500/10 font-inter">
                    {t('hero.badge.scalability')}
                  </Badge>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="flex justify-center">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-transparent border border-blue-500/40 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg hover:bg-blue-500/10 hover:border-blue-400 transform hover:scale-105 transition-all duration-300 font-inter"
                  >
                    {t('hero.cta')}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Image section - moved below and centered with increased top margin */}
            <div className="w-full max-w-4xl mt-24 md:mt-32">
              <ScrollReveal delay={1000} className="relative">
                <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-4 md:p-7 relative overflow-hidden backdrop-blur-sm">
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-full w-2 animate-pulse"></div>
                  
                  <div 
                    className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-lg border border-slate-600 bg-cover bg-center relative overflow-hidden"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Tech overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 bg-slate-900/90 border border-slate-600 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-lg">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
                        <span className="text-base md:text-xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-blue-400 font-inter">
                          {t('hero.floating.provisioning')}
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 font-inter">
                          {t('hero.floating.provisioning.desc')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-600 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-lg">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
                        <span className="text-base md:text-xl">⚡</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-purple-400 font-inter">
                          {t('hero.floating.automation')}
                        </div>
                        <div className="text-[10px] md:text-xs text-slate-400 font-inter">
                          {t('hero.floating.automation.desc')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
