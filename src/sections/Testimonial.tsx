import ScrollReveal from '../components/ScrollReveal';

const Testimonial = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-konneqt-purple/20 to-konneqt-blue/20">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl mb-8">💬</div>
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              "O QSCIM transformou nossa gestão de identidades. O que antes levava dias, agora acontece em minutos, 
              com segurança total e zero erros."
            </blockquote>
            <div className="text-konneqt-purple italic mb-2">
              — Dr. Maria Silva
            </div>
            <div className="text-muted-foreground">
              CTO da Universidade Federal de Tecnologia
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonial; 