import { AppLink } from '../components/AppLink';
import { DecorativeVideo } from '../components/DecorativeVideo';
import { Layout } from '../components/Layout';
import { MediaSlotsSection } from '../components/MediaSlotsSection';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export type PracticeAreaSlug = 'criminal' | 'immigration' | 'civil';

interface PracticeAreaDetailPageProps {
  area: PracticeAreaSlug;
}

export function PracticeAreaDetailPage({ area }: PracticeAreaDetailPageProps) {
  const { t } = useRouterLanguage();

  const config = {
    criminal: {
      number: '01',
      title: t.criminal,
      short: t.criminalShort,
      detail: t.criminalDetail,
      bullets: [t.criminalLi1, t.criminalLi2, t.criminalLi3],
      prep: t.criminalPrep,
      mediaTitle: t.criminalMedia,
      mediaIntro: t.criminalMediaIntro,
      isStockHero: false,
      poster: '/assets/hero-justice.webp',
      src: '/assets/hero-justice.mp4',
      mobileSrc: '/assets/hero-justice-mobile.mp4',
    },
    immigration: {
      number: '02',
      title: t.immigration,
      short: t.immigrationShort,
      detail: t.immigrationDetail,
      bullets: [t.immigrationLi1, t.immigrationLi2, t.immigrationLi3],
      prep: t.immigrationPrep,
      mediaTitle: t.immigrationMedia,
      mediaIntro: t.immigrationMediaIntro,
      isStockHero: true,
      poster: '/assets/attorney-stock.webp',
      src: '/assets/attorney-stock.mp4',
      mobileSrc: undefined,
    },
    civil: {
      number: '03',
      title: t.civil,
      short: t.civilShort,
      detail: t.civilDetail,
      bullets: [t.civilLi1, t.civilLi2, t.civilLi3],
      prep: t.civilPrep,
      mediaTitle: t.civilMedia,
      mediaIntro: t.civilMediaIntro,
      isStockHero: true,
      poster: '/assets/attorney-stock.webp',
      src: '/assets/attorney-stock.mp4',
      mobileSrc: undefined,
    },
  }[area];

  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className={`hero page-hero${config.isStockHero ? ' page-hero-stock' : ''}`}>
          <DecorativeVideo
            key={area}
            className="hero-video"
            poster={config.poster}
            src={config.src}
            mobileSrc={config.mobileSrc}
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.services}</p>
            <h1>{config.title}</h1>
            <p className="hero-intro">{config.short}</p>
            <AppLink className="button button-gold" to="/contact/#consultation">
              <span>{t.request}</span>
              <span aria-hidden="true">↗</span>
            </AppLink>
          </div>
          {config.isStockHero && <p className="page-stock-note">{t.stockFootage}</p>}
        </section>

        <section className="section-pad page-copy">
          <AppLink to="/practice-areas/" className="text-link back-link">
            {t.backToAreas}
          </AppLink>
          <div className="section-heading">
            <p className="eyebrow">{t.howHelp}</p>
            <h2>{t.practiceDetails}</h2>
          </div>
          <article className="detail-item">
            <span>{config.number}</span>
            <div>
              <h3>{config.title}</h3>
              <p>{config.detail}</p>
              <ul>
                {config.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4>{t.consultationPrep}</h4>
              <p>{config.prep}</p>
            </div>
          </article>
        </section>

        <MediaSlotsSection title={config.mediaTitle} intro={config.mediaIntro} />
      </main>
    </Layout>
  );
}
