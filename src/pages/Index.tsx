
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Challenges from '../sections/Challenges';
import WhatIsQSCIM from '../sections/WhatIsQSCIM';
import HowItWorks from '../sections/HowItWorks';
import Benefits from '../sections/Benefits';
import StudentLifecycle from '../sections/StudentLifecycle';
import StaffProvisioning from '../sections/StaffProvisioning';
import IntegratedSystems from '../sections/IntegratedSystems';
import Security from '../sections/Security';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Challenges />
      <WhatIsQSCIM />
      <HowItWorks />
      <Benefits />
      <StudentLifecycle />
      <StaffProvisioning />
      <IntegratedSystems />
      <Security />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
