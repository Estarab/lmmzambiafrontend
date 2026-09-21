import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import video1 from '../assets/videos/new1.mp4'; 
 import video2 from '../assets/videos/new2.mp4'; 
 import video3 from '../assets/videos/new3.mp4'; 
 import video4 from '../assets/videos/one.mp4';
 import video5 from '../assets/videos/three.mp4';

const sliderData = [
  {
    video: video1,
    title: 'Relationship Brokering',
    description: '',
  },
  {
     video: video2,
    title: ' Information and Knowledge management',
    description: '',
  },
  {
     video: video3,
    title: 'Agri Innovation Promotion',
    description: '',
  },
  {
     video: video4,
    title: 'Investment Facilitation',
    description: '',
  },
  {
     video: video5,
    title: 'Market Facilitation',
    description: '',
  },
];

const DesktopServicesSlider = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true, 
      cssEase: 'ease-in-out', 
    };
  
    return (
      <div className="w-full h-screen relative mt-2">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              
              <video
                autoPlay
                loop
                muted
                className="object-cover w-full h-full brightness-125"
                style={{ objectFit: isMobile ? 'contain' : 'cover' }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
  
              
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 md:p-8 bg-black bg-opacity-50">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-2xl">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  

export default DesktopServicesSlider;





