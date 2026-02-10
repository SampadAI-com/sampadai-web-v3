import { assets } from "./assets";
import type { LandingCopy } from "./content";

type MoneyMattersSectionProps = {
  copy: LandingCopy["money"];
};

export default function MoneyMattersSection({ copy }: MoneyMattersSectionProps) {
  return (
    <section className="section money-matters" aria-labelledby="money-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay blue" />
        <img src={assets.blueBg} alt="" />
      </div>
      <div className="section-inner font-roboto">
        <h2 id="money-title" className="section-title money-title">
          {copy.title}
        </h2>
        <p className="section-subtitle money-subtitle">{copy.subtitle}</p>
        <p className="section-body money-body">{copy.body}</p>
        <button type="button" className="cta-button">
          {copy.cta}
        </button>
      </div>
    </section>
  );
}
