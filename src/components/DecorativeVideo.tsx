import { useEffect, useRef } from 'react';

interface DecorativeVideoProps {
  className?: string;
  poster: string;
  src: string;
  mobileSrc?: string;
}

interface NetworkInformationLike extends EventTarget {
  saveData?: boolean;
}

export function DecorativeVideo({ className, poster, src, mobileSrc }: DecorativeVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)');
    const mobileViewport = window.matchMedia('(max-width: 680px)');
    const connection = (navigator as Navigator & { connection?: NetworkInformationLike }).connection;

    const restorePoster = () => {
      if (!video.hasAttribute('src')) return;
      video.removeAttribute('src');
      video.load();
    };

    const prefersStillImages = () =>
      reducedMotion.matches || reducedData.matches || Boolean(connection?.saveData);

    const handleError = () => restorePoster();
    video.addEventListener('error', handleError);

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting || prefersStillImages()) continue;
            observer?.unobserve(video);
            video.src = (mobileViewport.matches && mobileSrc) || src;
            video.play().catch(restorePoster);
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(video);
    }

    const handlePreferenceChange = () => {
      if (prefersStillImages()) {
        restorePoster();
      }
    };

    reducedMotion.addEventListener('change', handlePreferenceChange);
    reducedData.addEventListener('change', handlePreferenceChange);
    connection?.addEventListener?.('change', handlePreferenceChange);

    return () => {
      observer?.disconnect();
      video.removeEventListener('error', handleError);
      reducedMotion.removeEventListener('change', handlePreferenceChange);
      reducedData.removeEventListener('change', handlePreferenceChange);
      connection?.removeEventListener?.('change', handlePreferenceChange);
    };
  }, [src, mobileSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}
