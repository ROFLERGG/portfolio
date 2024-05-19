import { useEffect, useRef, useState } from 'react';
import Layout from './layout';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [animationDone, setAnimationDone] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationDone) {
        return;
      }
      const scrollTop = window.scrollY;
      const maxScroll = 500;
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationDone]);

  useEffect(() => {
    const text = textRef.current;
    const handleAnimationEnd = () => {
      setAnimationDone(true);
      text.classList.remove('animate-appear');
    };

    if (text) {
      text.addEventListener('animationend', handleAnimationEnd);
      return () => {
        text.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  return (
    <div className="flex justify-center min-h-[100svh]">
      <div className="flex flex-col justify-center">
        <h1 ref={textRef} style={{ opacity: animationDone ? opacity : 1 }} className={`text-8xl text-center animate-appear`}>
          Hello there!
        </h1>
      </div>
    </div>
  );
};

export default Hero;
