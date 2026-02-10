import { assets } from "./assets";

export default function MoneyMattersSection() {
  return (
    <section className="section money-matters" aria-labelledby="money-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay blue" />
        <img src={assets.blueBg} alt="" />
      </div>
      <div className="section-inner font-roboto">
        <h2 id="money-title" className="section-title money-title">
          we take your money matters seriously.
        </h2>
        <p className="section-subtitle money-subtitle">so that you don't have to.</p>
        <p className="section-body money-body">
          never miss a due date with reminders to help you pay your bills on time,
          instant settlements mean you never wait for your payments to go through
          and statement analysis lets you know where your money goes, always.
        </p>
        <button type="button" className="cta-button">
          Experience the upgrade
        </button>
      </div>
    </section>
  );
}
