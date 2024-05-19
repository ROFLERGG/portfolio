import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return <header className={`p-4 fixed top-0 w-full duration-300 ${scrolled ? 'translate-y-0' : '-translate-y-full'}`}>123213</header>;
};

export default Header;
