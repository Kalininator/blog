import Layout from '../components/Layout';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Layout pageTitle="Alex Kalinin - Blog" description="Alex Kalinin's Blog">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
