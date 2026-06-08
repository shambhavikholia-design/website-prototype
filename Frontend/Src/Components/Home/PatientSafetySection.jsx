import { useState, useEffect } from 'react';
import { getPatientSafety, getStatsData } from '../../services/api';
import './PatientSafetySection.css';
import patientImg from '../../Assets/Images/patient-safety.jpg';
import { ShieldCheck, CheckCircle, UserCheck, Shield, ClipboardList, Award, Users } from 'lucide-react';

const featureIconMap = {
  'shield-check': <ShieldCheck size={22} color="#00b4a2" strokeWidth={1.5} />,
  'check-circle': <CheckCircle size={22} color="#00b4a2" strokeWidth={1.5} />,
  'user-check':   <UserCheck   size={22} color="#00b4a2" strokeWidth={1.5} />,
};

const statIconMap = {
  shield: <Shield        size={28} color="#0b2545" strokeWidth={1.5} />,
  list:   <ClipboardList size={28} color="#0b2545" strokeWidth={1.5} />,
  award:  <Award         size={28} color="#0b2545" strokeWidth={1.5} />,
  users:  <Users         size={28} color="#0b2545" strokeWidth={1.5} />,
};


const PatientSafetySection = () => {
  const [safety, setSafety] = useState(null);
  const [stats, setStats]   = useState(null);

  useEffect(() => {
    getPatientSafety().then(setSafety).catch(() => setSafety(null));
    getStatsData().then(setStats).catch(() => setStats(null));
  }, []);

  if (!safety) return null;

  return (
    <>
      {/* Patient Safety Section */}
      <section className="safety">
        <div className="safety__left">
          <p className="safety__heading">{safety.heading}</p>
          <p className="safety__subheading">{safety.subheading}</p>
          <p className="safety__body">{safety.body}</p>
          <button className="safety__cta">{safety.ctaText} ›</button>
        </div>

        <div className="safety__shield">
          <img src={patientImg} alt="Patient Safety" className="safety__shield-img" />
        </div>

        <div className="safety__features">
          {safety.features.map((f) => (
            <div key={f.id} className="safety__feature">
              <span className="safety__feature-icon">{featureIconMap[f.icon]}</span>
              <div>
                <p className="safety__feature-title">{f.title}</p>
                <p className="safety__feature-desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      {stats && (
        <div className="stats-bar">
          {stats.map((stat, i) => (
            <div key={stat.id} className={`stats-bar__item ${i < stats.length - 1 ? 'stats-bar__item--border' : ''}`}>
              <span className="stats-bar__icon">{statIconMap[stat.icon]}</span>
              <div>
                <p className="stats-bar__value">{stat.value}</p>
                <p className="stats-bar__label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PatientSafetySection;
