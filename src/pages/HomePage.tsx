import { AppLink } from '../components/AppLink';
import { DecorativeVideo } from '../components/DecorativeVideo';
import { Layout } from '../components/Layout';
import { PracticeCardsGrid } from '../components/PracticeCardsGrid';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export function HomePage() {
  const { t } = useRouterLanguage();

  return (
    <Layout skipTarget="#home">
      <main>
        <section className="hero" id="home">
          <DecorativeVideo
            className="hero-video"
            poster="/assets/hero-justice.webp"
            src="/assets/hero-justice.mp4"
            mobileSrc="/assets/hero-justice-mobile.mp4"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.location}</p>
            <h1>
              {t.heroTitleLine1}
              <br />
              <em>{t.heroTitleEmphasis}</em>
            </h1>
            <p className="hero-intro">{t.heroIntro}</p>
            <AppLink className="button button-gold" to="/contact/#consultation">
              <span>{t.request}</span>
              <span aria-hidden="true">↗</span>
            </AppLink>
            <div className="hero-meta">
              <span>{t.established}</span>
              <i aria-hidden="true" />
              <span>{t.languages}</span>
            </div>
          </div>
          <a
            className="bar-link"
            href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/290617"
            target="_blank"
            rel="noopener noreferrer"
          >
            CALIFORNIA STATE BAR <strong>#290617 ↗</strong>
          </a>
        </section>

        <section className="practice section-pad" id="practice">
          <div className="section-heading">
            <p className="eyebrow">{t.services}</p>
            <h2>{t.practiceTitle}</h2>
            <p>{t.practiceIntro}</p>
          </div>
          <PracticeCardsGrid />
        </section>

        <section className="attorney-section" id="attorney">
          <div className="attorney-media">
            <DecorativeVideo
              poster="/assets/attorney-stock.webp"
              src="/assets/attorney-stock.mp4"
            />
            <span className="photo-caption">{t.stockFootage}</span>
          </div>
          <div className="attorney-copy">
            <p className="eyebrow">{t.attorneyLabel}</p>
            <h2>
              {t.attorneyTitleLine1}
              <br />
              <em>{t.attorneyTitleEmphasis}</em>
            </h2>
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
            <a
              className="text-link light-link"
              href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/290617"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.barProfile}
            </a>
          </div>
        </section>

        <section className="details-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">{t.howHelp}</p>
            <h2>{t.practiceDetails}</h2>
          </div>
          <div className="details-grid">
            <article className="detail-item" id="criminal-details">
              <span>01</span>
              <div>
                <h3>{t.criminal}</h3>
                <p>{t.criminalDetail}</p>
                <ul>
                  <li>{t.criminalLi1}</li>
                  <li>{t.criminalLi2}</li>
                  <li>{t.criminalLi3}</li>
                </ul>
                <h4>{t.consultationPrep}</h4>
                <p>{t.criminalPrep}</p>
              </div>
            </article>

            <article className="detail-item" id="immigration-details">
              <span>02</span>
              <div>
                <h3>{t.immigration}</h3>
                <p>{t.immigrationDetail}</p>
                <ul>
                  <li>{t.immigrationLi1}</li>
                  <li>{t.immigrationLi2}</li>
                  <li>{t.immigrationLi3}</li>
                </ul>
                <h4>{t.consultationPrep}</h4>
                <p>{t.immigrationPrep}</p>
              </div>
            </article>

            <article className="detail-item" id="civil-details">
              <span>03</span>
              <div>
                <h3>{t.civil}</h3>
                <p>{t.civilDetail}</p>
                <ul>
                  <li>{t.civilLi1}</li>
                  <li>{t.civilLi2}</li>
                  <li>{t.civilLi3}</li>
                </ul>
                <h4>{t.consultationPrep}</h4>
                <p>{t.civilPrep}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>
              {t.contactTitleLine1}
              <br />
              <em>{t.contactTitleEmphasis}</em>
            </h2>
            <p>{t.homeContactIntro}</p>
            <div className="contact-list">
              <a href="tel:+13108927837">
                <small>{t.callOffice}</small>
                <strong>(310) 892-7837</strong>
              </a>
              <a href="mailto:sal@310lawyer.com">
                <small>Email</small>
                <strong>sal@310lawyer.com</strong>
              </a>
              <a
                href="https://www.instagram.com/salsanchez_esq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Instagram</small>
                <strong>@salsanchez_esq ↗</strong>
              </a>
              <div>
                <small>{t.officeLocation}</small>
                <strong>Long Beach, California</strong>
              </div>
            </div>
          </div>

          <div className="form-panel">
            <p className="eyebrow">{t.formLabel}</p>
            <h3>{t.formTitle}</h3>
            <p className="form-note">{t.formNote}</p>
            <AppLink className="button button-gold" to="/contact/#consultation">
              <span>{t.request}</span>
              <span aria-hidden="true">↗</span>
            </AppLink>
          </div>
        </section>

        <section className="story-strip">
          <div>
            <p className="eyebrow">{t.attorneyLabel}</p>
            <h2>{t.storyTitle}</h2>
          </div>
          <img
            src="/assets/salvador.webp"
            alt="Salvador Sánchez, Esq."
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </section>

        <section className="legal-section" id="legal">
          <p className="eyebrow">{t.officeInfo}</p>
          <h2>{t.legalTitle}</h2>
          <p>{t.legalText}</p>
          <p>{t.legalText2}</p>
          <a
            href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/290617"
            target="_blank"
            rel="noopener noreferrer"
          >
            California State Bar #290617 ↗
          </a>
        </section>
      </main>
    </Layout>
  );
}
