import { useState, useEffect } from 'react';
import { getHeroData } from '../../services/api';
import heroBg from '../../Assets/Images/hero-bg.jpg';
import './HeroSection.css';

const HeroSection = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHeroData()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="hero hero--loading"><div className="hero__spinner" /></div>;

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">
          CONNECTING EVERY STEP.<br />
          <strong>PROTECTING EVERY PATIENT.</strong>
        </p>
        <h1 className="hero__heading">
          Medical Device <span className="hero__heading--accent">Reprocessing</span> Done Right.
        </h1>
        <p className="hero__subheading">{data?.subheading}</p>
        <button className="hero__cta">
          {data?.ctaText} <span>›</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
