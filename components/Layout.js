import Navigation from '../components/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
