import { assets } from "./assets";
import type { LandingCopy } from "./content";
import LanguageSwitcher from "./LanguageSwitcher";

type HeroSectionProps = {
  copy: Pick<LandingCopy, "nav" | "hero">;
  language?: "en" | "de" | "pl" | "es";
};

export default function HeroSection({ copy, language }: HeroSectionProps) {
  return (
    <section className="section hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-overlay" />
        <img src={assets.heroBg} alt="" />
      </div>
      <nav className="hero-nav">
        <img className="logo-mark" src={assets.logoMark} alt="SampadAI" />
        <div className="nav-right">
          <div className="nav-links">
            <button type="button" className="nav-link">
              {copy.nav.signup}
            </button>
            <button type="button" className="nav-link">
              {copy.nav.login}
            </button>
          </div>
          <LanguageSwitcher currentLang={language} />
        </div>
      </nav>
      <div className="hero-content font-roboto">
        <h1 id="hero-title" className="hero-title">
          {copy.hero.title}
        </h1>
        <p className="hero-subtitle">{copy.hero.subtitle}</p>
        <button type="button" className="cta-button cta-hero">
          {copy.hero.cta}
        </button>
      </div>
    </section>
  );
}
