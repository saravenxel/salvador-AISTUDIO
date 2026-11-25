import { AppLink } from '../components/AppLink';
import { DecorativeVideo } from '../components/DecorativeVideo';
import { Layout } from '../components/Layout';
import { MediaSlotsSection } from '../components/MediaSlotsSection';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export function AttorneyPage() {
  const { t } = useRouterLanguage();

  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className="hero page-hero page-hero-stock">
          <DecorativeVideo
            className="hero-video"
            poster="/assets/attorney-stock.webp"
            src="/assets/attorney-stock.mp4"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.location}</p>
            <h1>{t.navAttorney}</h1>
            <p className="hero-intro">{t.attorneyPageIntro}</p>
            <AppLink className="button button-gold" to="#biography">
              <span>{t.readBio}</span>
              <span aria-hidden="true">↗</span>
            </AppLink>
          </div>
          <p className="page-stock-note">{t.stockFootage}</p>
        </section>

        <section className="section-pad page-copy" id="biography">
          <div className="section-heading page-bio">
            <p className="eyebrow">{t.attorneyLabel}</p>
            <h2>
              {t.attorneyTitleLine1}
              <br />
              <em>{t.attorneyTitleEmphasis}</em>
            </h2>
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <a
              className="text-link"
              href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/290617"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.barProfile}
            </a>
          </div>
        </section>

        <MediaSlotsSection title={t.attorneyMedia} intro={t.attorneyMediaIntro} />
      </main>
    </Layout>
  );
}
