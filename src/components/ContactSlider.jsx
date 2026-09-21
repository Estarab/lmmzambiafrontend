import React from 'react';
import Slider from 'react-slick';


import image1 from '../assets/sliderimg/team.jpg';
import image2 from '../assets/sliderimg/location.png';
import image3 from '../assets/sliderimg/call.jpg';
const WhatWeDo = () => {
  const images = [
    { src: image1, title: 'We Would Love to Hear from you ' },
    { src: image2, title: 'AgriEn Network. AgriEn Hub, SD 46 of 397A Chipwenupwenu Road, Makeni, Lusaka, Zambia' },
    { src: image3, title: 'Call Us : +260 960 84369' },
   
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
      <h2 className="text-4xl font-bold text-center mb-6 text-[#ffa500]">Contact Us</h2>
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