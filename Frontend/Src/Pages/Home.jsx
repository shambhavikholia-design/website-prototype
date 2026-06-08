import HeroSection from '../Components/Home/HeroSection';
import PhasesSection from '../Components/Home/PhasesSection';
import FlowSection from '../Components/Home/FlowSection';
import PatientSafetySection from '../Components/Home/PatientSafetySection';

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}
      <PhasesSection />

      {/* Section 3*/}
      <FlowSection />

      {/* Section 4 */}
      <PatientSafetySection />
    </>
  );
};

export default Home;
