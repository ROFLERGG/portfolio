import { useEffect, useState } from 'react';

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener('scroll', updateCompletion);
    return () => {
      window.removeEventListener('scroll', updateCompletion);
    };
  }, []);
  return completion;
};
export default useReadingProgress;
