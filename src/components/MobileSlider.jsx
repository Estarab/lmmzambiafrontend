import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import video1 from '../assets/videos/new2.mp4';
import video2 from '../assets/videos/one.mp4';
// import video3 from '../assets/videos/farmer.mp4';
import video4 from '../assets/videos/three.mp4';
import video5 from '../assets/videos/new3.mp4';
import video6 from '../assets/videos/two.mp4';
import video7 from '../assets/videos/new2.mp4';
import video8 from '../assets/videos/new1.mp4';

const sliderData = [
  {
    video: video1,
    title: 'Building Sustainable Food Systems',
    description: 'We are committed to building a sustainable future for food systems across Zambia.',
  },
  {
     video: video2,
    title: 'Collectively Promote Environmental Outcomes',
    description: 'Collaborating for a greener tomorrow by promoting better environmental outcomes.',
  },
  // {
  //    video: video3,
  //   title: 'Fostering Partnerships for Africa’s Sustainable Food Security',
  //   description: 'Creating partnerships to strengthen Africa’s food security for future generations.',
  // },
  {
     video: video4,
    title: 'Enhancing Social and Economic Outcomes',
    description: 'Together, we enhance social and economic outcomes to uplift communities.',
  },
  {
     video: video5,
    title: 'Enhancing Food Utilization and Access',
    description: 'Ensuring better food access, utilization, and availability for everyone.',
  },
  {
     video: video6,
    title: 'Building Sustainable Food Systems',
    description: 'We are committed to building a sustainable future for food systems across Zambia.',
  },
  {
     video: video7,
    title: 'Enhancing Food Utilization and Access',
    description: 'Ensuring better food access, utilization, and availability for everyone.',
  },
  {
     video: video8,
    title: 'Fostering Partnerships for Africa’s Sustainable Food Security',
    description: 'Creating partnerships to strengthen Africa’s food security for future generations.',
  },
];
const MobileSlider = () => {
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
    fade: true, 
    cssEase: 'ease-in-out', 
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full brightness-75"
              style={{
                objectFit: isMobile ? 'cover' : 'cover', // Ensure video covers full screen
              }}
            >
              <source src={slide.video} type="video/mp4" />
              {/* Fallback content for unsupported browsers */}
              Your browser does not support the video tag.
            </video>

            {/* Overlay content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center p-4 md:p-8 bg-black bg-opacity-50">
              <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-4">{slide.title}</h2>
              {/* <p className="text-sm md:text-lg">{slide.description}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileSlider;



