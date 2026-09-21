import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from '../assets/services/Investment-Facilitation/Relationship brokering.jpg';
import image2 from '../assets/services/Market Faciliation.jpg';
import image3 from '../assets/services/Investment Faciliation.jpg';
import image4 from '../assets/services/Kmowledge Management (Research).jpeg';
import image5 from '../assets/services/WhatsApp Image 2024-11-26 at 21.40.51-2.jpeg';
import image6 from '../assets/services/Investment-Facilitation/Input Access facilitation.jpg';

const AboutSlider = () => {
  const images = [
    { src: image1, title: 'Relationship Brokering' },
    { src: image2, title: 'Output market facilitation' },
    { src: image3, title: 'Investment facilitation' },
    { src: image4, title: 'Information/Knowledge Management' },
    { src: image5, title: 'Agri Innovation Promotion' },
    { src: image6, title: 'Input Access Facilitation' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <h2 className="text-3xl font-bold text-center mb-2 text-[#46923c]">What We Do</h2>
      
      
      <div className="w-full flex justify-center">
        <Slider {...settings} className="w-full max-w-4xl">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center justify-center mb-8">
              {/* Left Section - Title and Subtitle */}
             

              {/* Right Section - Image */}
              <div className="w-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover rounded-lg"
                />
              </div>
              <div className="w-full text-center mb-4">
                {image.title && <h3 className="text-2xl font-semibold text-[#46923c]">{image.title}</h3>}
                {image.sub && <p className="text-xl font-semibold text-[#46923c]">{image.sub}</p>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutSlider;



