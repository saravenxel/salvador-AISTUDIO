import { AppLink } from '../components/AppLink';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export function SuccessPage() {
  const { language, setLanguage, t } = useRouterLanguage();

  return (
    <main className="success-page">
      <p className="eyebrow">SALVADOR SÁNCHEZ · ATTORNEY AT LAW</p>
      <h1>{t.successTitle}</h1>
      <p>{t.successBody}</p>
      <AppLink className="button button-gold" to="/">
        <span>{t.successReturn}</span>
        <span aria-hidden="true">↗</span>
      </AppLink>
      <div className="success-lang" aria-label="Language">
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
    </main>
  );
}
