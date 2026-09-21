import React from 'react';
import Slider from 'react-slick';


import image1 from '../assets/sliderimg/s2.jpg';
import image2 from '../assets/sliderimg/knowledge.jpg';
import image3 from '../assets/sliderimg/s5.jpg';
// import image4 from '../assets/sliderimg/agrien images/capacity building.jpeg';
// import image5 from '../assets/sliderimg/agrien images/img5.jpg';

const WhatWeDo = () => {
  const images = [
    { src: image1, title: 'Relationship Brokering & Stakeholder Engagement Facilitation' },
    { src: image2, title: 'Knowledge Management (Acquisition and Transfer)' },
    { src: image3, title: 'Acquisition and Investment facilitation' },
    // { src: image4, title: 'Technology Adoption' },
    // { src: image5, title: 'Capacity Building' },
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
    <div className="container mx-auto px-4 py-8 mt-24">
      <h2 className="text-4xl font-bold text-center mb-6 text-[#ffa500]">Our Services</h2>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-center ">{image.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatWeDo;