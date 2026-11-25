import { useRouterLanguage } from '../context/RouterLanguageContext';
import { AppLink } from './AppLink';

export function PracticeCardsGrid() {
  const { t } = useRouterLanguage();

  const cards = [
    {
      number: '01 / 03',
      title: t.criminal,
      description: t.criminalShort,
      href: '/practice-areas/criminal-defense/',
      image: '/assets/criminal.webp',
      alt: 'Classical courthouse columns',
    },
    {
      number: '02 / 03',
      title: t.immigration,
      description: t.immigrationShort,
      href: '/practice-areas/immigration/',
      image: '/assets/immigration.webp',
      alt: 'Family looking toward an airport runway',
    },
    {
      number: '03 / 03',
      title: t.civil,
      description: t.civilShort,
      href: '/practice-areas/civil-matters/',
      image: '/assets/civil.webp',
      alt: 'Fountain pen and legal document',
    },
  ];

  return (
    <div className="practice-grid">
      {cards.map((card) => (
        <article className="practice-card" key={card.href}>
          <div className="card-image">
            <img src={card.image} alt={card.alt} loading="lazy" referrerPolicy="no-referrer" />
          </div>
          <div className="card-body">
            <span className="card-number">{card.number}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <AppLink to={card.href} className="text-link">
              {t.explore}
            </AppLink>
          </div>
        </article>
      ))}
    </div>
  );
}
