
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-konneqt-blue/5 via-konneqt-purple/5 to-konneqt-green/5 dark:from-konneqt-blue/10 dark:via-konneqt-purple/10 dark:to-konneqt-green/10">
      <div className="w-full py-12 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <ScrollReveal>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 rounded-full px-3 md:px-4 py-2 mb-4 mt-16 md:mt-4">
                  <span className="text-base md:text-lg">⭐</span>
                  <span className="text-xs md:text-sm font-medium">Solução Líder em Gestão de Identidades</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.3] md:leading-[1.2]">
                  <span style={{ color: '#1ee391' }}>QSCIM</span> para{' '}
                  <span className="text-konneqt-blue">Escolas</span> e{' '}
                  <span className="text-konneqt-purple">Universidades</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
                  Revolucionando o Provisionamento de Identidades
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Transforme a gestão de identidades em sua instituição educacional 
                  com a solução QSCIM da Konneqt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Badge className="bg-konneqt-green text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    ✅ Automação Completa
                  </Badge>
                  <Badge className="bg-konneqt-blue text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    ✅ Segurança Avançada
                  </Badge>
                  <Badge className="bg-konneqt-purple text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    ✅ Escalabilidade
                  </Badge>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Solicitar Demonstração
                  </Button>
                  <div className="bg-konneqt-green/20 text-konneqt-green font-medium px-4 py-2 rounded-full border border-konneqt-green/30 flex items-center gap-2 text-xs md:text-sm w-full sm:w-auto justify-center">
                    <span className="text-base md:text-lg">🎉</span>
                    <span>50% OFF no primeiro ano</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <ScrollReveal delay={400} className="relative">
                <div className="bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-4 md:p-7 relative overflow-hidden">
                  <div 
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg bg-cover bg-center"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-lg animate-float">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-konneqt-blue/20 rounded-full flex items-center justify-center">
                        <span className="text-base md:text-xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-konneqt-blue">
                          Provisionamento Automático
                        </div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">
                          Em minutos, não dias
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2 md:py-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-konneqt-purple/20 rounded-full flex items-center justify-center">
                        <span className="text-base md:text-xl">🔒</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-konneqt-purple">
                          Desprovisionamento Seguro
                        </div>
                        <div className="text-[10px] md:text-xs text-muted-foreground">
                          100% automatizado
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
