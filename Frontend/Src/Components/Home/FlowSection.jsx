import { useState, useEffect } from 'react';
import { getFlowData } from '../../services/api';
import './FlowSection.css';
import { Stethoscope, Truck, Droplets, Search, Wrench, Wind, Package, ShieldCheck } from 'lucide-react';

const iconMap = {
  scalpel: <Stethoscope size={22} strokeWidth={1.5} />,
  truck:   <Truck       size={22} strokeWidth={1.5} />,
  droplet: <Droplets    size={22} strokeWidth={1.5} />,
  search:  <Search      size={22} strokeWidth={1.5} />,
  tools:   <Wrench      size={22} strokeWidth={1.5} />,
  steam:   <Wind        size={22} strokeWidth={1.5} />,
  box:     <Package     size={22} strokeWidth={1.5} />,
  shield:  <ShieldCheck size={22} strokeWidth={1.5} />,
};

const FlowSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getFlowData().then(setData).catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <section className="flow">
      <div className="flow__inner">
        <h2 className="flow__title">{data.sectionTitle}</h2>

        <div className="flow__track">
          {data.steps.map((step, index) => (
            <div key={step.id} className="flow__step">
              <div className="flow__step-icon">
                {iconMap[step.icon]}
              </div>
              <p className="flow__step-title">{step.title}</p>
              <p className="flow__step-desc">{step.description}</p>
              {index < data.steps.length - 1 && (
                <div className="flow__step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowSection;
