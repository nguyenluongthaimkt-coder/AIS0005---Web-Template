import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from './Icons';
import { Translation } from '../types';

interface ScrollToTopButtonProps {
  t: Translation;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.scrollToTopAria}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg hover:shadow-xl transform-gpu transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`
      }
    >
      <ChevronUpIcon size={24} />
    </button>
  );
};

export default ScrollToTopButton;