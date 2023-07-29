import { useState, useEffect } from 'react';

const useScrollToBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
    setIsAtBottom(distanceFromBottom < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isAtBottom;
};

export default useScrollToBottom;
