import { assets } from "./assets";

export default function RewardsSection() {
  return (
    <section className="section rewards" aria-labelledby="rewards-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay red" />
        <img src={assets.redBg} alt="" />
      </div>
      <div className="section-inner font-roboto">
        <h2 id="rewards-title" className="section-title rewards-title">
          feel special more often.
        </h2>
        <p className="section-subtitle rewards-subtitle">
          turn financial management into a lifestyle upgrade.
        </p>
        <p className="section-body rewards-body">
          every time you optimize your spending or reach a savings milestone on
          SampadAI, you're doing more than just "banking." You're unlocking
          exclusive paths to wealth and curated experiences designed for the
          modern woman. With SampadAI, financial growth is its own reward.
        </p>
        <button type="button" className="cta-button">
          Explore rewards
        </button>
      </div>
    </section>
  );
}
