import { useEffect, useRef, useState } from 'react';

const useScrollFadeOut = () => {
  const [opacity, setOpacity] = useState(1);
  const [animationDone, setAnimationDone] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!animationDone) {
        return;
      }
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.clientHeight / 2;
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
  return { textRef, opacity, animationDone };
};

export default useScrollFadeOut;
