import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout/Layout';
import { Footer } from '../components/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title='Animal Crossing' footer={<Footer></Footer>}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
