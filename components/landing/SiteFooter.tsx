import { assets, footerColumns, footerFaq, footerMetaLines } from "./assets";

export default function SiteFooter() {
  return (
    <footer className="section site-footer">
      <div className="footer-faq font-inter">
        {footerFaq.map((item) => (
          <div key={item.title} className="footer-faq-item">
            <h3>{item.title}</h3>
            <p className="footer-body-text">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="footer-divider" />
      <div className="footer-meta font-inter">
        {footerMetaLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="footer-core font-inter">
        <div className="footer-brand">
          <img className="brand-logo" src={assets.brandLogoHorizontal} alt="SampadAI" />
          <img src={assets.securityLogos} alt="Security certifications" />
          <p className="footer-brand-title">complete security. no asterisks.</p>
          <p className="footer-brand-body">
            SampadAI encrypts all data and transactions to ensure a completely
            secure experience for our members.
          </p>
        </div>
        <div className="footer-links">
          {footerColumns.map((column) => (
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
        <span>copyright (c) 2026 SampadAI Pvt Ltd.</span>
      </div>
    </footer>
  );
}
