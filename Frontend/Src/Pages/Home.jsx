import HeroSection from '../Components/Home/HeroSection';
import PhasesSection from '../Components/Home/PhasesSection';
import FlowSection from '../Components/Home/FlowSection';
import PatientSafetySection from '../Components/Home/PatientSafetySection';

const Home = () => {
  return (
    <>
      {/* Section 1: Big hero banner */}
      <HeroSection />

      {/* Section 2: The 4 phases cards */}
      <PhasesSection />

      {/* Section 3: Instrument flow track */}
      <FlowSection />

      {/* Section 4: Patient safety + stats bar */}
      <PatientSafetySection />
    </>
  );
};

export default Home;
