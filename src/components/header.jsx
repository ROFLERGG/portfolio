import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sprite from '/sprites.svg';

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
  return (
    <header className={`p-4 fixed top-0 w-full duration-300 ${scrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between items-center">
        <Link to={'/'} className="text-2xl tracking-widest">
          Home
        </Link>
        <div className="flex items-center">
          <Link to="https:www.discord.com">
            <svg className="w-8 h-8">
              <use width={32} height={32} xlinkHref={`${Sprite}#discord-icon`} />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
