'use client'
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SwiperComponent = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="/page0.png" alt="배너1" />
        </div>
        <div className="swiper-slide">
          <img src="/page1.png" alt="배너2" />
        </div>
        <div className="swiper-slide">
          <img src="/page2.png" alt="배너2" />
        </div>
        
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperComponent;
