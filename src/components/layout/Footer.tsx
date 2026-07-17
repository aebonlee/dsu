import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import site from '../../config/site';
import type { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img className="footer-logo" src="/images/logo/logo-horizontal-white.png" alt="동신대학교 DONGSHIN UNIVERSITY" />
            <h3>
              {site.brand.parts.map((part, i) => (
                <span key={i} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h3>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {site.footerLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path}>{t(link.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <p><strong>{site.company.name}</strong> · 대표 {site.company.ceo}</p>
            <p><i className="fa-solid fa-envelope" /> {site.company.email}</p>
            <p><i className="fa-solid fa-phone" /> {site.company.phone}</p>
            <p><i className="fa-solid fa-comment" /> 카카오톡 ID: {site.company.kakao}</p>
            <p><i className="fa-regular fa-clock" /> {site.company.businessHours}</p>

          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2020-{new Date().getFullYear()} DreamIT Biz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
