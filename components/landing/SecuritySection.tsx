import { assets } from "./assets";
import type { LandingCopy } from "./content";

type SecuritySectionProps = {
  copy: LandingCopy["security"];
};

export default function SecuritySection({ copy }: SecuritySectionProps) {
  return (
    <section className="section security" aria-labelledby="security-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay purple" />
        <img src={assets.securityBg} alt="" />
      </div>
      <div className="section-inner font-inter">
        <h2 id="security-title" className="section-title security-title">
          {copy.titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < copy.titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h2>
        <p className="section-subtitle security-subtitle">{copy.subtitle}</p>
        <p className="section-body security-body">{copy.body}</p>
        <button type="button" className="cta-button">
          {copy.cta}
        </button>
      </div>
    </section>
  );
}
