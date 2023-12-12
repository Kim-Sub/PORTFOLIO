/* 사용방법

사용하려는 컴포넌트에서 import 한 후 App아래 최고 부모 요소로 감싸면 된다.

*/

import React, { useState, useEffect, useRef } from 'react';

const HorizonScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const documentHeight = Math.round(document.documentElement.scrollHeight);
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id="HorizonScrollBar" style={{
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '5px', backgroundColor: '#333',
        overflow: 'hidden', zIndex: '1000',
      }}
    >
      <div className="progress-bar"
        style={{ width: `${scrollPercentage}%`, height: '5px', backgroundColor: '#db321c'}}
      />
    </div>
  );
};




const Scroll100vh = ({ children }) => {
  const scrollDistance = window.innerHeight;
  const scrollDuration = 400;

  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScrollBy = (amount, duration) => {
    setIsScrolling(true);
    const start = window.scrollY;
    const target = start + amount;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const ease = easeInOutQuad(elapsedTime, 0, 1, duration);
        window.scrollTo(0, start + ease * amount);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, target);
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const handleScroll = (event) => {
    if (isScrolling) return;
    const scrollAmount = event.deltaY > 0 ? scrollDistance : -scrollDistance;
    smoothScrollBy(scrollAmount, scrollDuration);
  };

  return (
    <div onWheel={handleScroll}>
      <HorizonScrollBar />
      {children}
      
      
    </div>
  );
};

export default Scroll100vh;
