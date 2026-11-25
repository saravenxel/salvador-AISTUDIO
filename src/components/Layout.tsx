import React, { useEffect, useState } from 'react';
import { useRouterLanguage } from '../context/RouterLanguageContext';
import { AppLink } from './AppLink';

interface LayoutProps {
  skipTarget?: string;
  children: React.ReactNode;
}

export function Layout({ skipTarget = '#main-content', children }: LayoutProps) {
  const { route, language, setLanguage, t } = useRouterLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  const isPracticeActive = route.startsWith('/practice-areas/');
  const isAttorneyActive = route === '/attorney/';
  const isContactActive = route === '/contact/';

  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href={skipTarget}>
        {t.skip}
      </a>

      <header className="site-header">
        <AppLink className="brand" to="/" aria-label="Salvador Sánchez, Attorney at Law">
          <span className="brand-mark">SS</span>
          <span className="brand-copy">
            <strong>Salvador Sánchez</strong>
            <small>ATTORNEY AT LAW</small>
          </span>
        </AppLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav${menuOpen ? ' open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <AppLink
            to="/practice-areas/"
            aria-current={isPracticeActive ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {t.navPractice}
          </AppLink>
          <AppLink
            to="/attorney/"
            aria-current={isAttorneyActive ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {t.navAttorney}
          </AppLink>
          <AppLink
            to="/contact/"
            aria-current={isContactActive ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {t.navContact}
          </AppLink>

          <div className="language-switch" aria-label="Language">
            <button
              type="button"
              className={language === 'en' ? 'active' : ''}
              aria-pressed={language === 'en'}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={language === 'es' ? 'active' : ''}
              aria-pressed={language === 'es'}
              onClick={() => setLanguage('es')}
            >
              ES
            </button>
          </div>

          <a className="nav-phone" href="tel:+13108927837" onClick={() => setMenuOpen(false)}>
            (310) 892-7837
          </a>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <AppLink
          className="brand footer-brand"
          to={route === '/' ? '#home' : '/'}
          aria-label="Salvador Sánchez, Attorney at Law"
        >
          <span className="brand-mark">SS</span>
          <span className="brand-copy">
            <strong>Salvador Sánchez</strong>
            <small>ATTORNEY AT LAW</small>
          </span>
        </AppLink>
        <p>© {currentYear} Salvador Sánchez, Esq.</p>
        <div>
          <a href="https://www.instagram.com/salsanchez_esq/" target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
          <AppLink to={route === '/' ? '#legal' : '/#legal'}>{t.legalLink}</AppLink>
        </div>
      </footer>
    </>
  );
}
