import { assets } from "./assets";
import type { LandingCopy } from "./content";

type RewardsSectionProps = {
  copy: LandingCopy["rewards"];
};

export default function RewardsSection({ copy }: RewardsSectionProps) {
  return (
    <section className="section rewards" aria-labelledby="rewards-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay red" />
        <img src={assets.redBg} alt="" />
      </div>
      <div className="section-inner font-roboto">
        <h2 id="rewards-title" className="section-title rewards-title">
          {copy.title}
        </h2>
        <p className="section-subtitle rewards-subtitle">{copy.subtitle}</p>
        <p className="section-body rewards-body">{copy.body}</p>
        <button type="button" className="cta-button">
          {copy.cta}
        </button>
      </div>
    </section>
  );
}
