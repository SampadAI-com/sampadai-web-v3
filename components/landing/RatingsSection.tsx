import { assets } from "./assets";

export default function RatingsSection() {
  return (
    <section className="section ratings" aria-label="App ratings">
      <div className="section-bg" aria-hidden="true">
        <img src={assets.ratingsBg} alt="" />
      </div>
      <div className="ratings-inner font-inter">
        <div className="ratings-grid">
          <div className="rating-card">
            <div className="rating-head">
              <div className="rating-score">
                <span className="rating-number">4.8</span>
                <span className="rating-store">app store</span>
              </div>
              <button className="store-button" type="button">
                <img src={assets.appleLogo} alt="" />
                <span>Download the app</span>
              </button>
            </div>
            <img className="rating-stars" src={assets.ratingIos} alt="" />
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-quote">
            "in love! such a seamless user experience, smooth as freshly waxed
            pair of legs! very intuitive and easy to use application. good job
            people, good job."
          </p>
          <p className="testimonial-name">emilia llosa</p>
        </div>
        <div className="testimonial-dots" aria-hidden="true">
          <span />
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
