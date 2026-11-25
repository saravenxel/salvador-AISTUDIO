import { useEffect, useRef } from 'react';
import { AppLink } from '../components/AppLink';
import { DecorativeVideo } from '../components/DecorativeVideo';
import { Layout } from '../components/Layout';
import { MediaSlotsSection } from '../components/MediaSlotsSection';
import { PracticeCardsGrid } from '../components/PracticeCardsGrid';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export function PracticeAreasPage() {
  const { language, t } = useRouterLanguage();
  const enVideoRef = useRef<HTMLVideoElement | null>(null);
  const esVideoRef = useRef<HTMLVideoElement | null>(null);

  // Pause inactive narrated video whenever language toggles
  useEffect(() => {
    if (language === 'en' && esVideoRef.current && !esVideoRef.current.paused) {
      esVideoRef.current.pause();
    }
    if (language === 'es' && enVideoRef.current && !enVideoRef.current.paused) {
      enVideoRef.current.pause();
    }
  }, [language]);

  return (
    <Layout>
      <main id="main-content" tabIndex={-1}>
        <section className="hero page-hero">
          <DecorativeVideo
            className="hero-video"
            poster="/assets/hero-justice.webp"
            src="/assets/hero-justice.mp4"
            mobileSrc="/assets/hero-justice-mobile.mp4"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.location}</p>
            <h1>{t.navPractice}</h1>
            <p className="hero-intro">{t.practiceIntro}</p>
            <div className="page-actions">
              <AppLink className="button button-gold" to="#areas">
                <span>{t.viewAreas}</span>
                <span aria-hidden="true">↗</span>
              </AppLink>
              <AppLink className="text-link light-link" to="#overview-video">
                {t.watchIntro}
              </AppLink>
            </div>
          </div>
        </section>

        <section className="practice section-pad" id="areas" aria-labelledby="areas-title">
          <div className="section-heading">
            <p className="eyebrow">{t.services}</p>
            <h2 id="areas-title">{t.practiceTitle}</h2>
            <p>{t.practiceIntro}</p>
          </div>
          <PracticeCardsGrid />
        </section>

        <section
          className="section-pad featured-video"
          id="overview-video"
          aria-labelledby="practice-video-title"
        >
          <div className="section-heading">
            <p className="eyebrow">{t.videoLabel}</p>
            <h2 id="practice-video-title">{t.videoTitle}</h2>
            <p>{t.videoIntro}</p>
            <details className="video-transcript">
              <summary>{t.transcriptLabel}</summary>
              <p>{t.transcript}</p>
            </details>
          </div>

          <div className="player-frame">
            <video
              ref={enVideoRef}
              controls
              playsInline
              preload="none"
              poster="/assets/hero-justice.webp"
              src="/assets/practice-intro-en.mp4"
              aria-labelledby="practice-video-title"
              hidden={language !== 'en'}
            >
              <track
                kind="captions"
                srcLang="en"
                label="English"
                src="/assets/practice-intro-en.vtt"
                default
              />
            </video>
            <video
              ref={esVideoRef}
              controls
              playsInline
              preload="none"
              poster="/assets/hero-justice.webp"
              src="/assets/practice-intro-es.mp4"
              aria-labelledby="practice-video-title"
              hidden={language !== 'es'}
            >
              <track
                kind="captions"
                srcLang="es"
                label="Español"
                src="/assets/practice-intro-es.vtt"
                default
              />
            </video>
          </div>
        </section>

        <MediaSlotsSection title={t.practiceMedia} intro={t.practiceMediaIntro} />
      </main>
    </Layout>
  );
}
