import { useState, useEffect } from 'react';

type BrowserTheme = 'light' | 'dark';
export const useBrowserTheme = (): BrowserTheme => {
  const [windowObj, setWindowObj] = useState(
    typeof window !== 'undefined' ? window : null,
  );
  useEffect(() => setWindowObj(window), []);
  if (windowObj)
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: Dark)').matches
      ? 'dark'
      : 'light';

  return 'light';
};
