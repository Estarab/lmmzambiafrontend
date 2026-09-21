import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';


import image1 from '../assets/sliderimg/agrien images/slid1.jpg';
import image2 from '../assets/sliderimg/agrien images/slid2.jpg';
import image3 from '../assets/sliderimg/agrien images/slider3.jpeg';
import image4 from '../assets/sliderimg/agrien images/Partnerships.jpg';
import image5 from '../assets/sliderimg/agrien images/cropped-cherry-tomatoes-lettuce-basil-5606443.jpg';


import mobileImage1 from '../assets/sliderimg/agrien images/slid1.jpg';
import mobileImage2 from '../assets/sliderimg/agrien images/slid2.jpg';
import mobileImage3 from '../assets/sliderimg/agrien images/slider3.jpeg';
import mobileImage4 from '../assets/sliderimg/agrien images/Partnerships.jpg';
import mobileImage5 from '../assets/sliderimg/about.jpg';

const sliderData = [
  {
    desktopImage: image1,
    mobileImage: mobileImage1,
    title: 'Building Sustainable Food Systems',
  },
  {
    desktopImage: image2,
    mobileImage: mobileImage2,
    title: 'Collectively promote environmental outcomes',
  },
  {
    desktopImage: image3,
    mobileImage: mobileImage3,
    title: 'Fostering Partnerships and Opportunities',
  },
  {
    desktopImage: image4,
    mobileImage: mobileImage4,
    title: 'Collectively enhance social and economic outcomes',
  },
  {
    desktopImage: image5,
    mobileImage: mobileImage5,
    title: 'Enhancing food, utilisation, access and availability',
  },
];

const SliderComponent = () => {
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
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative w-full h-screen flex flex-col">
            <div className="bg-[#46923c] bg-opacity-100 p-2 md:p-8 text-center text-white z-10">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
            </div>
            
            <img
              src={isMobile ? slide.mobileImage : slide.desktopImage}
              alt={slide.title}
              className={`object-cover w-full h-full brightness-150 transition-transform duration-300 ${isMobile ? 'transform -translate-y-0' : ''}`}
              style={{ objectFit: isMobile ? 'contain' : '' }} // show fully on mobile
            />
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default SliderComponent;



