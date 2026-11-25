import React from 'react';
import { useRouterLanguage } from '../context/RouterLanguageContext';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function AppLink({ to, onClick, children, ...rest }: AppLinkProps) {
  const { navigate, buildHref } = useRouterLanguage();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={buildHref(to)} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
