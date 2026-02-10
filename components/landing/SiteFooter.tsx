import { assets } from "./assets";
import type { LandingCopy } from "./content";

type SiteFooterProps = {
  copy: LandingCopy["footer"];
};

export default function SiteFooter({ copy }: SiteFooterProps) {
  return (
    <footer className="section site-footer">
      <div className="footer-faq font-inter">
        {copy.faq.map((item) => (
          <div key={item.title} className="footer-faq-item">
            <h3>{item.title}</h3>
            <p className="footer-body-text">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="footer-divider" />
      <div className="footer-meta font-inter">
        {copy.metaLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="footer-core font-inter">
        <div className="footer-brand">
          <img className="brand-logo" src={assets.brandLogoHorizontal} alt="SampadAI" />
          <img src={assets.securityLogos} alt="Security certifications" />
          <p className="footer-brand-title">{copy.brandTitle}</p>
          <p className="footer-brand-body">{copy.brandBody}</p>
        </div>
        <div className="footer-links">
          {copy.columns.map((column) => (
            <div key={column.title} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom font-inter">
        <span>{copy.copyright}</span>
      </div>
    </footer>
  );
}
