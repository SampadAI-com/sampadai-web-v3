import { assets } from "./assets";
import type { LandingCopy } from "./content";

type ExperienceSectionProps = {
  copy: LandingCopy["experience"];
};

export default function ExperienceSection({ copy }: ExperienceSectionProps) {
  return (
    <section className="section experience" aria-label={copy.ariaLabel}>
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay dark" />
        <img src={assets.heroBg} alt="" />
      </div>
      <div className="experience-inner font-roboto">
        {copy.features.map((feature, index) => (
          <div
            key={feature.title}
            className={`feature-block ${feature.withDevice ? "with-device" : ""}`}
          >
            <div className="feature-copy">
              <h2 className={`feature-title feature-title-${index}`}>
                {feature.title}
              </h2>
              <p className="feature-body">{feature.body}</p>
            </div>
            {feature.withDevice ? (
              <div className="feature-device" aria-hidden="true">
                <div className="device-shell">
                  <div className="device-placeholder" />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
