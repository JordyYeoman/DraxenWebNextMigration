import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Draxen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navigation />
      <div className="content-wrapper pb-8 sm:pb-0">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
