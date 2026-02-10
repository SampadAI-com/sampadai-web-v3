import { assets } from "./assets";
import type { LandingCopy } from "./content";

type TrustSectionProps = {
  copy: LandingCopy["trust"];
};

export default function TrustSection({ copy }: TrustSectionProps) {
  return (
    <section className="section trust" aria-labelledby="trust-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay green" />
        <img src={assets.trustBg} alt="" />
      </div>
      <div className="trust-inner font-inter">
        <h2 id="trust-title" className="section-title trust-title">
          {copy.titleLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < copy.titleLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </h2>
        <div className="trust-copy">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
