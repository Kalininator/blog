import Layout from '../components/Layout';
import { AppProps } from 'next/app';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    bg: '#282828',
    navBg: '#3c3836',
    navText: '#fabd2f',
    plainText: '#fbf1c7',
    title: '#d79921',
    detailText: '#8ec07c',
  },
};

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageTitle="Alex Kalinin - Blog" description="Alex Kalinin's Blog">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
