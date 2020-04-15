import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
import { useBrowserTheme } from '~/hooks/useBrowserTheme';
import themes, { Themes, Theme } from '~/constants/theme';
import Header from '~components/Layout/Header';
import ScrollProgressBar from '~/components/Layout/ScrollProgressBar';
import ThemeToggle from '~/components/Layout/ThemeToggle';

const GlobalStyle = createGlobalStyle`
a, abbr, address, area, article, aside, base,
blockquote,  br, button, canvas, caption,
col, colgroup, data, datalist, dd, del,
details, div, dl, dt, em, embed, fieldset, figcaption,
figure, footer, form, header, hr, html, i,
h1, h2, h3, h4, h5, h6, q, s, section, select,
iframe, input, ins, label, legend, li,
main, map, mark, meter, nav, object, ol, progress,
optgroup, option, output, p, param, picture,
small, source, span, strong, sub, summary,
sup, table, tbody, td, textarea, tfoot, th,
thead, time, tr, track, u, ul {
  all:unset;
}

a, button, map {
  cursor: pointer;
} 

html, body, div#__next {
  width: 100vw;
  min-height: 100vh;

  margin: unset;

  display:block;

  overflow-x:hidden;

  
  ${({ theme }) => {
    const {
      colorSet: { background, text },
    } = theme as Theme;
    return `
    background-color: ${background};
    color: ${text}
    `;
  }}
}

body * {
  box-sizing: border-box;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
html::-webkit-scrollbar {
    display: none; 
}

`;

function App({ Component, pageProps }: AppProps) {
  const browserTheme = useBrowserTheme();
  const [theme, setTheme] = useState<Themes>(browserTheme);
  const [isScrollTop, setIsScrollTop] = useState<boolean>(false);

  const toggleTheme = (theme: Themes) => setTheme(theme);

  const onChangeScroll = (height: number): void => {
    setIsScrollTop(height <= 0);
  };

  return (
    <ThemeProvider
      theme={themes[theme] || themes[browserTheme] || themes.light}
    >
      <GlobalStyle />
      <Header isFitMode={!isScrollTop} />
      <ScrollProgressBar onChange={onChangeScroll} />
      <Component {...pageProps} />
      <ThemeToggle toggleTheme={toggleTheme} themeName={theme} />
    </ThemeProvider>
  );
}

export default App;
