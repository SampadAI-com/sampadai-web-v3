import { assets } from "./assets";
import type { LandingCopy } from "./content";

type RatingsSectionProps = {
  copy: LandingCopy["ratings"];
};

export default function RatingsSection({ copy }: RatingsSectionProps) {
  return (
    <section className="section ratings" aria-label={copy.ariaLabel}>
      <div className="section-bg" aria-hidden="true">
        <img src={assets.ratingsBg} alt="" />
      </div>
      <div className="ratings-inner font-inter">
        <div className="ratings-grid">
          <div className="rating-card">
            <div className="rating-head">
              <div className="rating-score">
                <span className="rating-number">4.8</span>
                <span className="rating-store">{copy.storeLabel}</span>
              </div>
              <button className="store-button" type="button">
                <img src={assets.appleLogo} alt="" />
                <span>{copy.button}</span>
              </button>
            </div>
            <img className="rating-stars" src={assets.ratingIos} alt="" />
          </div>
        </div>
        <div className="testimonial">
          <p className="testimonial-quote">{copy.testimonialQuote}</p>
          <p className="testimonial-name">{copy.testimonialName}</p>
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
