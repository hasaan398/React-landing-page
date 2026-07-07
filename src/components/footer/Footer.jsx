import React from "react";
import "./Footer.css";
import Links from "../../assets/Links.png"; // apna image yahan rakho
const footerColumns = [
  {
    title: "Product",
    links: ["Pricing", "Overview", "Browse", "Accessibility", "5.0"],
  },
  {
    title: "Solutions",
    links: ["Brainstorming", "Ideation", "Wireframing", "Research"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Blog", "Tutorials", "FAQs"],
  },
  {
    title: "Support",
    links: ["Contact Us", "Developers", "Documentation", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Events", "Request Demo"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
            <img src={Links} alt="Logo" className="footer-logo" />
        </div>

        <div className="footer-columns">
          {footerColumns.map((col, index) => (
            <div className="footer-col" key={index}>
              <h4 className="footer-col-title">{col.title}</h4>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">
                      {link}
                      {col.title === "Product" && link === "Accessibility" && (
                        <span className="badge-new">NEW</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">uteach @ 2023. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <span className="footer-divider"></span>
          <a href="#">EN</a>
          <a href="#">EUR</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;