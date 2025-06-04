
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-konneqt-blue/5 via-konneqt-purple/5 to-konneqt-green/5 dark:from-konneqt-blue/10 dark:via-konneqt-purple/10 dark:to-konneqt-green/10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">QSCIM</span> para{' '}
                <span className="text-konneqt-blue">Escolas</span> e{' '}
                <span className="text-konneqt-purple">Universidades</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Revolucionando o Provisionamento de Identidades
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transforme a gestão de identidades em sua instituição educacional 
                com a solução QSCIM da Konneqt.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-konneqt-green text-white px-4 py-2 text-sm">
                  ✅ Automação Completa
                </Badge>
                <Badge className="bg-konneqt-blue text-white px-4 py-2 text-sm">
                  ✅ Segurança Avançada
                </Badge>
                <Badge className="bg-konneqt-purple text-white px-4 py-2 text-sm">
                  ✅ Escalabilidade
                </Badge>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white px-8 py-6 text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Solicitar Demonstração
              </Button>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal delay={400} className="relative">
              <div className="bg-gradient-to-br from-konneqt-blue/10 to-konneqt-purple/10 rounded-2xl p-8 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Estudantes e professores"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
                
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float">
                  <span className="text-sm font-semibold text-konneqt-blue">
                    Provisionamento Automático
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-semibold text-konneqt-purple">
                    Desprovisionamento Seguro
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
