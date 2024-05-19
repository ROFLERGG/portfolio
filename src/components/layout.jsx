import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col flex-1 min-h-[2000px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
