import { assets } from "./assets";

export default function TrustSection() {
  return (
    <section className="section trust" aria-labelledby="trust-title">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay green" />
        <img src={assets.trustBg} alt="" />
      </div>
      <div className="trust-inner font-inter">
        <h2 id="trust-title" className="section-title trust-title">
          the story of
          <br />
          SampadAI begins
          <br />
          with trust.
        </h2>
        <div className="trust-copy">
          <p>
            wealth is more than a number. It's a choice. For too long, the world
            of finance was built by a few, for a few often overlooking the very
            people who manage the heart of every economy: women. We felt it was
            time someone built a system that didn't just track transactions, but
            honored the intention behind them.
          </p>
          <p>
            we created SampadAI to be the wind at your back. A platform that
            rewards the smart, the disciplined, and the visionary. By optimizing
            the way you manage your money today, we're helping you build the
            legacy you want for tomorrow. We built this because we believe
            financial freedom isn't a gift it's a right you've already earned.
          </p>
          <p>
            if you're here, you're ready to lead your own financial story.
            Welcome to SampadAI.
          </p>
        </div>
      </div>
    </section>
  );
}
