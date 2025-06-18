
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../contexts/LanguageContext';

const StaffProvisioning = () => {
  const { t } = useLanguage();

  const profiles = [
    {
      title: t('staffProvisioning.professor.title'),
      accesses: [
        t('staffProvisioning.professor.lms'), 
        t('staffProvisioning.professor.grades'), 
        t('staffProvisioning.professor.labs'), 
        t('staffProvisioning.professor.library'), 
        t('staffProvisioning.professor.email')
      ],
      color: 'konneqt-blue'
    },
    {
      title: t('staffProvisioning.admin.title'),
      accesses: [
        t('staffProvisioning.admin.sis'), 
        t('staffProvisioning.admin.hr'), 
        t('staffProvisioning.admin.financial'), 
        t('staffProvisioning.admin.reports'), 
        t('staffProvisioning.admin.email')
      ],
      color: 'konneqt-purple'
    },
    {
      title: t('staffProvisioning.visiting.title'),
      accesses: [
        t('staffProvisioning.visiting.temporary'), 
        t('staffProvisioning.visiting.wifi'), 
        t('staffProvisioning.visiting.lms'), 
        t('staffProvisioning.visiting.library'), 
        t('staffProvisioning.visiting.labs')
      ],
      color: 'konneqt-green'
    }
  ];

  const flowSteps = [
    { step: '1', title: t('staffProvisioning.flow.hiring') },
    { step: '2', title: t('staffProvisioning.flow.processing') },
    { step: '3', title: t('staffProvisioning.flow.provisioning') },
    { step: '4', title: t('staffProvisioning.flow.credentials') }
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
                src="/lovable-uploads/c7eea927-3fa3-4a89-8415-38dca8ba6f3b.png" 
                alt="Teachers and staff collaborating" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay matching page color palette */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-900/60 to-slate-800/70"></div>
              
              {/* Text overlay - positioned at bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end items-center text-center px-6 pb-12">
                <h1 className="text-4xl md:text-6xl font-light mb-4 text-white font-inter">
                  <span className="font-light">{t('staffProvisioning.title')}</span> <span className="font-bold" style={{ color: '#1de28f' }}>{t('staffProvisioning.title.staff')}</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-4xl font-inter">
                  {t('staffProvisioning.description')}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {profiles.map((profile, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg rounded-2xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white font-inter">{profile.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wide font-inter">
                    {t('staffProvisioning.accesses')}
                  </h4>
                  <ul className="space-y-2">
                    {profile.accesses.map((access, accessIndex) => (
                      <li key={accessIndex} className="flex items-center text-sm text-slate-300 font-inter">
                        <span className="w-2 h-2 bg-konneqt-green rounded-full mr-3 flex-shrink-0"></span>
                        {access}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="border border-blue-500/40 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-white font-inter">{t('staffProvisioning.flow.title')}</h3>
            
            <div className="grid sm:grid-cols-4 gap-6">
              {flowSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-konneqt-blue to-konneqt-purple text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-semibold text-white font-inter">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StaffProvisioning;
