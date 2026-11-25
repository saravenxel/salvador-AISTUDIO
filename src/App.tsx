import { RouterLanguageProvider, useRouterLanguage } from './context/RouterLanguageContext';
import { AttorneyPage } from './pages/AttorneyPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PracticeAreaDetailPage } from './pages/PracticeAreaDetailPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { SuccessPage } from './pages/SuccessPage';

function PageSwitch() {
  const { route } = useRouterLanguage();

  switch (route) {
    case '/practice-areas/':
      return <PracticeAreasPage />;
    case '/practice-areas/criminal-defense/':
      return <PracticeAreaDetailPage area="criminal" />;
    case '/practice-areas/immigration/':
      return <PracticeAreaDetailPage area="immigration" />;
    case '/practice-areas/civil-matters/':
      return <PracticeAreaDetailPage area="civil" />;
    case '/attorney/':
      return <AttorneyPage />;
    case '/contact/':
      return <ContactPage />;
    case '/success':
      return <SuccessPage />;
    case '/':
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <RouterLanguageProvider>
      <PageSwitch />
    </RouterLanguageProvider>
  );
}
