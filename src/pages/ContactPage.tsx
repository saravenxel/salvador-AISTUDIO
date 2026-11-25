import React, { useState } from 'react';
import { AppLink } from '../components/AppLink';
import { DecorativeVideo } from '../components/DecorativeVideo';
import { Layout } from '../components/Layout';
import { MediaSlotsSection } from '../components/MediaSlotsSection';
import { useRouterLanguage } from '../context/RouterLanguageContext';

export function ContactPage() {
  const { language, t, navigate } = useRouterLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [acknowledgment, setAcknowledgment] = useState(false);
  const [botField, setBotField] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    // Silent honeypot protection
    if (botField.trim() !== '') {
      navigate('/success');
      return;
    }

    if (!name.trim() || !email.trim() || !topic || !acknowledgment) {
      setErrorMessage(t.validationError);
      return;
    }

    setSubmitting(true);
    try {
      // Save inquiry summary in sessionStorage so confirmation flow is resilient in static/SPA environments
      const payload = {
        'form-name': 'consultation',
        language,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        topic,
        message: message.trim(),
        acknowledgment: 'I understand',
        submittedAt: new Date().toISOString(),
      };
      try {
        window.sessionStorage.setItem('ss-last-inquiry', JSON.stringify(payload));
      } catch {
        // Ignore storage restrictions
      }
      navigate('/success');
    } finally {
      setSubmitting(false);
    }
  };

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
            <h1>{t.navContact}</h1>
            <p className="hero-intro">{t.contactPageIntro}</p>
            <AppLink className="button button-gold" to="#consultation">
              <span>{t.request}</span>
              <span aria-hidden="true">↗</span>
            </AppLink>
          </div>
          <p className="page-stock-note">{t.stockFootage}</p>
        </section>

        <section className="contact-section" id="office">
          <div className="contact-intro">
            <p className="eyebrow">{t.contactLabel}</p>
            <h2>
              {t.contactTitleLine1}
              <br />
              <em>{t.contactTitleEmphasis}</em>
            </h2>
            <p>{t.contactIntro}</p>
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

          <div className="form-panel" id="consultation">
            <p className="eyebrow">{t.formLabel}</p>
            <h3>{t.formTitle}</h3>
            <p className="form-note">{t.formNote}</p>

            <form name="consultation" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="consultation" />
              <input type="hidden" name="language" id="form-language" value={language} />

              <p className="hidden-field">
                <label>
                  Do not fill this out:{' '}
                  <input
                    name="bot-field"
                    value={botField}
                    onChange={(e) => setBotField(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </p>

              {errorMessage && (
                <p className="form-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <label htmlFor="name">{t.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">{t.emailLabel}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="phone">{t.phoneLabel}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label htmlFor="topic">{t.topicLabel}</label>
              <select
                id="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              >
                <option value="">{t.chooseOption}</option>
                <option value="Criminal defense">{t.criminal}</option>
                <option value="Immigration">{t.immigration}</option>
                <option value="Civil matters">{t.civil}</option>
                <option value="Other">{t.other}</option>
              </select>

              <label htmlFor="message">{t.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <label className="consent">
                <input
                  type="checkbox"
                  name="acknowledgment"
                  value="I understand"
                  checked={acknowledgment}
                  onChange={(e) => setAcknowledgment(e.target.checked)}
                  required
                />
                <span>{t.acknowledgment}</span>
              </label>

              <button
                className="button button-gold submit-button"
                type="submit"
                disabled={submitting}
              >
                <span>{t.submit}</span>
                <span aria-hidden="true">↗</span>
              </button>

              <p className="form-disclaimer">{t.formDisclaimer}</p>
            </form>
          </div>
        </section>

        <MediaSlotsSection title={t.contactMedia} intro={t.contactMediaIntro} />
      </main>
    </Layout>
  );
}
