import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Navigation />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
