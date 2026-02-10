import { assets } from "./assets";

export default function SecuritySection() {
  return (
    <section className="section security" aria-labelledby="security-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay purple" />
        <img src={assets.securityBg} alt="" />
      </div>
      <div className="section-inner font-inter">
        <h2 id="security-title" className="section-title security-title">
          security first.
          <br />
          and second.
        </h2>
        <p className="section-subtitle security-subtitle">
          what's yours remains only yours.
        </p>
        <p className="section-body security-body">
          We've built SampadAI with a "zero-error" philosophy. Your personal
          information and transaction history are encrypted at every step,
          ensuring that what's yours remains yours.
        </p>
        <button type="button" className="cta-button">
          Become a member
        </button>
      </div>
    </section>
  );
}
