import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import site from '../../config/site';
import type { ReactElement, ChangeEvent } from 'react';

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
            <p>{site.company.email}</p>
            <p>{site.company.phone}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value={site.parentSite.url}>{site.parentSite.name} (본사이트)</option>
                {site.familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
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
