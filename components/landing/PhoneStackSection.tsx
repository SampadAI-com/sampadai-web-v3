import { assets } from "./assets";

export default function PhoneStackSection() {
  return (
    <section className="section phone-stack" aria-label="App previews">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay" />
        <img src={assets.phoneStackBg} alt="" />
      </div>
      <div className="phone-stack-inner">
        <div className="phone-card phone-a placeholder" aria-hidden="true" />
        <div className="phone-card phone-b placeholder" aria-hidden="true" />
        <div className="phone-card phone-c placeholder" aria-hidden="true" />
        <div className="phone-card phone-d placeholder" aria-hidden="true" />
        <div className="phone-card phone-e placeholder" aria-hidden="true" />
      </div>
    </section>
  );
}
