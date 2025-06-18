
import { Badge } from '../components/ui/badge';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const WhatIsQSCIM = () => {
  const { t } = useLanguage();

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
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              <span className="font-light">{t('whatIsQscim.title')}</span> <span className="font-bold" style={{ color: '#1ee391' }}>{t('whatIsQscim.title.qscim')}</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg text-slate-300 leading-relaxed font-inter">
              {t('whatIsQscim.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg rounded-xl p-6 w-full max-w-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white font-inter">{t('whatIsQscim.protocol.title')}</h3>
              <ul className="space-y-2 text-slate-300">
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

          <ScrollReveal delay={400}>
            <div className="border border-green-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-green-400 transition-all duration-300 hover:shadow-lg rounded-xl p-6 w-full max-w-2xl">
              <h3 className="text-xl font-semibold mb-4 text-white font-inter">Experience our SCIM Agentic AI</h3>
              <p className="text-slate-300 leading-relaxed font-inter">
                Our MCP(Model Context Protocol), enables an autonomous/Agentic AI capacity to interact with several AI Engines such as Chat GPT, Gemini, Claude, enabling communication with any channel: Chat, Voice, WhatsApp etc.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhatIsQSCIM;
