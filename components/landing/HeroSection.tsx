import { assets } from "./assets";

export default function HeroSection() {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-overlay" />
        <img src={assets.heroBg} alt="" />
      </div>
      <nav className="hero-nav">
        <img className="logo-mark" src={assets.logoMark} alt="SampadAI" />
        <div className="nav-links">
          <button type="button" className="nav-link">
            signup
          </button>
          <button type="button" className="nav-link">
            login
          </button>
        </div>
      </nav>
      <div className="hero-content font-roboto">
        <h1 id="hero-title" className="hero-title">
          crafted for the woman in command
        </h1>
        <p className="hero-subtitle">
          join the inner circle of women winning daily.
        </p>
        <button type="button" className="cta-button cta-hero">
          Download SampadAI
        </button>
      </div>
    </section>
  );
}
