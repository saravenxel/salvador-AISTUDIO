import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Language, TranslationDictionary, translations } from '../i18n/translations';

export type RoutePath =
  | '/'
  | '/practice-areas/'
  | '/practice-areas/criminal-defense/'
  | '/practice-areas/immigration/'
  | '/practice-areas/civil-matters/'
  | '/attorney/'
  | '/contact/'
  | '/success';

function normalizePathname(rawPath: string): { path: RoutePath; forcedSpanish: boolean } {
  let forcedSpanish = false;
  let cleaned = rawPath.trim() || '/';

  // Replicate netlify.toml [[redirects]] from = "/es/*" to = "/:splat?lang=es"
  if (cleaned === '/es' || cleaned.startsWith('/es/')) {
    forcedSpanish = true;
    cleaned = cleaned.replace(/^\/es(?=\/|$)/, '') || '/';
  }

  // Strip index.html if present
  cleaned = cleaned.replace(/\/index\.html$/i, '/');

  // Remove duplicate slashes
  cleaned = cleaned.replace(/\/{2,}/g, '/');

  const lower = cleaned.toLowerCase();
  if (lower === '/success' || lower === '/success/' || lower === '/success.html') {
    return { path: '/success', forcedSpanish };
  }
  if (lower === '/practice-areas' || lower === '/practice-areas/') {
    return { path: '/practice-areas/', forcedSpanish };
  }
  if (lower === '/practice-areas/criminal-defense' || lower === '/practice-areas/criminal-defense/') {
    return { path: '/practice-areas/criminal-defense/', forcedSpanish };
  }
  if (lower === '/practice-areas/immigration' || lower === '/practice-areas/immigration/') {
    return { path: '/practice-areas/immigration/', forcedSpanish };
  }
  if (lower === '/practice-areas/civil-matters' || lower === '/practice-areas/civil-matters/') {
    return { path: '/practice-areas/civil-matters/', forcedSpanish };
  }
  if (lower === '/attorney' || lower === '/attorney/') {
    return { path: '/attorney/', forcedSpanish };
  }
  if (lower === '/contact' || lower === '/contact/') {
    return { path: '/contact/', forcedSpanish };
  }

  return { path: '/', forcedSpanish };
}

function getInitialLanguage(forcedSpanish: boolean): Language {
  if (forcedSpanish) return 'es';
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'es' || param === 'en') return param;
  try {
    const stored = window.localStorage.getItem('ss-language');
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // Ignore storage access errors in restricted iframes
  }
  return 'en';
}

interface RouterLanguageContextValue {
  route: RoutePath;
  language: Language;
  t: TranslationDictionary;
  setLanguage: (lang: Language) => void;
  navigate: (to: string) => void;
  buildHref: (to: string) => string;
}

const RouterLanguageContext = createContext<RouterLanguageContextValue | null>(null);

function scrollToHashOrTop(hash: string) {
  if (hash) {
    const id = hash.replace(/^#/, '');
    window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo({ top: 0 });
      }
    });
  } else {
    window.scrollTo({ top: 0 });
  }
}

export function RouterLanguageProvider({ children }: { children: React.ReactNode }) {
  const initialParsed = useMemo(() => normalizePathname(window.location.pathname), []);
  const [route, setRoute] = useState<RoutePath>(initialParsed.path);
  const [language, setLanguageState] = useState<Language>(() =>
    getInitialLanguage(initialParsed.forcedSpanish),
  );

  // Sync <html lang>, localStorage, and URL query parameter on language or route change
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem('ss-language', language);
    } catch {
      // Ignore storage errors
    }

    const currentUrl = new URL(window.location.href);
    currentUrl.pathname = route;
    currentUrl.searchParams.set('lang', language);
    const nextUrl = currentUrl.pathname + currentUrl.search + currentUrl.hash;
    if (nextUrl !== window.location.pathname + window.location.search + window.location.hash) {
      window.history.replaceState({}, '', nextUrl);
    }
  }, [language, route]);

  // Update document title according to current route and language
  useEffect(() => {
    const dict = translations[language];
    const titleMap: Record<RoutePath, string> = {
      '/': dict.homePageTitle,
      '/practice-areas/': `${dict.navPractice} | Salvador Sánchez, Esq.`,
      '/practice-areas/criminal-defense/': `${dict.criminal} | Salvador Sánchez, Esq.`,
      '/practice-areas/immigration/': `${dict.immigration} | Salvador Sánchez, Esq.`,
      '/practice-areas/civil-matters/': `${dict.civil} | Salvador Sánchez, Esq.`,
      '/attorney/': `${dict.navAttorney} | Salvador Sánchez, Esq.`,
      '/contact/': `${dict.navContact} | Salvador Sánchez, Esq.`,
      '/success': dict.successPageTitle,
    };
    document.title = titleMap[route];
  }, [route, language]);

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const parsed = normalizePathname(window.location.pathname);
      setRoute(parsed.path);
      const param = new URLSearchParams(window.location.search).get('lang');
      if (parsed.forcedSpanish) {
        setLanguageState('es');
      } else if (param === 'es' || param === 'en') {
        setLanguageState(param);
      }
      scrollToHashOrTop(window.location.hash);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to hash on initial load if present
  useEffect(() => {
    if (window.location.hash) {
      scrollToHashOrTop(window.location.hash);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const buildHref = useCallback(
    (to: string) => {
      if (to.startsWith('#')) {
        return to;
      }
      const url = new URL(to, window.location.origin);
      if (language === 'es') {
        url.searchParams.set('lang', 'es');
      } else {
        url.searchParams.set('lang', 'en');
      }
      return url.pathname + url.search + url.hash;
    },
    [language],
  );

  const navigate = useCallback(
    (to: string) => {
      if (to.startsWith('#')) {
        const currentUrl = new URL(window.location.href);
        currentUrl.hash = to;
        window.history.pushState({}, '', currentUrl.pathname + currentUrl.search + currentUrl.hash);
        scrollToHashOrTop(to);
        return;
      }

      const url = new URL(to, window.location.origin);
      const parsed = normalizePathname(url.pathname);
      const nextLang: Language = parsed.forcedSpanish
        ? 'es'
        : url.searchParams.get('lang') === 'es'
          ? 'es'
          : url.searchParams.get('lang') === 'en'
            ? 'en'
            : language;

      url.pathname = parsed.path;
      url.searchParams.set('lang', nextLang);

      window.history.pushState({}, '', url.pathname + url.search + url.hash);
      setRoute(parsed.path);
      if (nextLang !== language) {
        setLanguageState(nextLang);
      }
      scrollToHashOrTop(url.hash);
    },
    [language],
  );

  const value = useMemo<RouterLanguageContextValue>(
    () => ({
      route,
      language,
      t: translations[language],
      setLanguage,
      navigate,
      buildHref,
    }),
    [route, language, setLanguage, navigate, buildHref],
  );

  return <RouterLanguageContext.Provider value={value}>{children}</RouterLanguageContext.Provider>;
}

export function useRouterLanguage() {
  const ctx = useContext(RouterLanguageContext);
  if (!ctx) {
    throw new Error('useRouterLanguage must be used within RouterLanguageProvider');
  }
  return ctx;
}
