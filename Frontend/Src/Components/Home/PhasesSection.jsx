import { useState, useEffect } from 'react';
import { Droplets, Wrench, Wind, Package } from 'lucide-react';
import { getPhasesData } from '../../services/api';
import './PhasesSection.css';
import phase1 from '../../Assets/Images/phase1-decontamination.jpg';
import phase2 from '../../Assets/Images/phase2-assembly.jpg';
import phase3 from '../../Assets/Images/phase3-sterilization.jpg';
import phase4 from '../../Assets/Images/phase4-storage.jpg';

const phaseImages = { 1: phase1, 2: phase2, 3: phase3, 4: phase4 };

const PhaseIcon = ({ icon }) => {
  const map = {
    droplet: <Droplets size={24} color="#00b4a2" strokeWidth={1.5} />,
    tools:   <Wrench   size={24} color="#00b4a2" strokeWidth={1.5} />,
    steam:   <Wind     size={24} color="#00b4a2" strokeWidth={1.5} />,
    box:     <Package  size={24} color="#00b4a2" strokeWidth={1.5} />,
  };
  return map[icon] || null;
};

const PhasesSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPhasesData().then(setData).catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <section className="phases">
      <div className="phases__header">
        <p className="phases__label">{data.sectionLabel}</p>
        <h2 className="phases__title">
          Medical Device <span className="phases__title--accent">Reprocessing</span>
        </h2>
        <p className="phases__subtitle">{data.sectionSubtitle}</p>
      </div>

      <div className="phases__grid">
        {data.items.map((phase, index) => (
          <div key={phase.id} className="phase-card">
            {/* Step number badge */}
            <div className="phase-card__number">{phase.id}</div>
            <img src={phaseImages[phase.id]} alt={phase.title} className="phase-card__img" />

            
            {index < data.items.length - 1 && (
              <div className="phase-card__arrow">→</div>
            )}

            <div className="phase-card__icon">
              <PhaseIcon icon={phase.icon} />
            </div>
            <h3 className="phase-card__title">{phase.title}</h3>
            <p className="phase-card__desc">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhasesSection;
