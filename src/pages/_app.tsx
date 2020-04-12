import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { useBrowserTheme } from '~/hooks/useBrowserTheme';
import themes, { Themes, Theme } from '~/constants/theme';
import Header from '~components/Layout/Header';
import FakeScroll from '~/components/Layout/FakeScroll';

const GlobalStyle = createGlobalStyle`
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

  const toggleTheme = (theme: Themes) => setTheme(theme);

  return (
    <ThemeProvider
      theme={themes[theme] || themes[browserTheme] || themes.light}
    >
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <FakeScroll />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
