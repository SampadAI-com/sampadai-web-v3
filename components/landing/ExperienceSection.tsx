import { assets } from "./assets";

const features = [
  {
    title: "we've got your back.",
    body:
      "stop reacting to your finances and start leading them. Receive intelligent, category-based breakdowns of your monthly spends and real-time alerts on your credit limits.",
    withDevice: true
  },
  {
    title: "begin your winning streak.",
    body:
      "your journey to financial freedom should be as rewarding as the destination."
  },
  {
    title: "for your eclectic taste.",
    body:
      "step into a member-only space featuring a handpicked selection of products and experiences designed to align with your lifestyle."
  },
  {
    title: "more cash in your pockets.",
    body:
      "stop jumping between apps to stay on top of your life. With SampadAI Auto-Pilot"
  }
];

export default function ExperienceSection() {
  return (
    <section className="section experience" aria-label="SampadAI experiences">
      <div className="section-bg" aria-hidden="true">
        <div className="section-bg-overlay dark" />
        <img src={assets.heroBg} alt="" />
      </div>
      <div className="experience-inner font-roboto">
        {features.map((feature, index) => (
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
