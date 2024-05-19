import { useEffect, useRef, useState } from 'react';
import Layout from './layout';
import useScrollFadeOut from '../hooks/useScrollFadeOut';

const Hero = () => {
  const { textRef, opacity, animationDone } = useScrollFadeOut();
  return (
    <div className="flex justify-center min-h-[100svh] overflow-hidden">
      <div className="flex flex-col justify-center">
        <div className="skew-constant">
          <h1 ref={textRef} style={{ opacity: animationDone ? opacity : 1 }} className={`text-6xl text-center animate-appear`}>
            Hello there!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
