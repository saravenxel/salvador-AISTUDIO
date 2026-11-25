import { useRouterLanguage } from '../context/RouterLanguageContext';

interface MediaSlotsSectionProps {
  title: string;
  intro: string;
}

export function MediaSlotsSection({ title, intro }: MediaSlotsSectionProps) {
  const { t } = useRouterLanguage();

  return (
    <section className="section-pad page-media" aria-labelledby="media-title">
      <div className="section-heading">
        <p className="eyebrow">{t.mediaLabel}</p>
        <h2 id="media-title">{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="media-grid">
        <figure className="media-slot">
          <div className="slot-preview" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="9" r="1.5" />
              <path d="m3 16 5-4 4 4 4-6 5 6" />
            </svg>
          </div>
          <figcaption>
            <span>01</span>
            <strong>{t.imageSlot}</strong>
          </figcaption>
        </figure>
        <figure className="media-slot">
          <div className="slot-preview" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="m10 8 6 4-6 4Z" />
            </svg>
          </div>
          <figcaption>
            <span>02</span>
            <strong>{t.videoSlot}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
