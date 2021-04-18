import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

const darkTheme: DefaultTheme = {
  colors: {
    bg: '#282828',
    navBg: '#3c3836',
    navText: '#fabd2f',
    plainText: '#fbf1c7',
    title: '#d79921',
    detailText: '#8ec07c',
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    bg: '#ebdbb2',
    navBg: '#bdae93',
    title: '#076678',
    plainText: '#3c3836',
    navText: '#427b58',
    detailText: '#8f3f71',
  },
};

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout pageTitle="Alex Kalinin - Blog" description="Alex Kalinin's Blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
