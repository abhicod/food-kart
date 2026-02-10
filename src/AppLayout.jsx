import Header from './components/Header/Header';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Body/ScrollToTop';

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
