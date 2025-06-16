
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const WhatIsQSCIM = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('whatIsQscim.title')} <span style={{ color: '#1ee391' }}>{t('whatIsQscim.title.qscim')}</span>?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('whatIsQscim.description')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-r from-konneqt-blue/10 to-konneqt-purple/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{t('whatIsQscim.protocol.title')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3"></span>
                    {t('whatIsQscim.protocol.standard')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-blue rounded-full mr-3"></span>
                    {t('whatIsQscim.protocol.faster')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-purple rounded-full mr-3"></span>
                    {t('whatIsQscim.protocol.interoperability')}
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-konneqt-orange rounded-full mr-3"></span>
                    {t('whatIsQscim.protocol.errors')}
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex justify-center">
            <ScrollReveal delay={400}>
              <div className="bg-gradient-to-br from-konneqt-green/10 to-konneqt-blue/10 rounded-xl p-8 max-w-md">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="text-lg font-semibold mb-2">{t('whatIsQscim.automation.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('whatIsQscim.automation.description')}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsQSCIM;
