import React from 'react';
import Slider from 'react-slick';


import image1 from '../assets/sliderimg/agrien images/Partnerships.jpg';
import image2 from '../assets/sliderimg/pro1.jpg';
import image3 from '../assets/sliderimg/about.jpg';


const AboutSlider = () => {
  const images = [
    { src: image1, title: 'Our Vision : Fostering partnerships and opportunities that contribute to Africa’s Food.' },
    { src: image2, title: 'Our Mission : Building sustainable food systems for a food secure Zambia' },
    { src: image3, title: 'Our Target : Promoting sustainable thriving local food system' },
    
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
      <h2 className="text-4xl font-bold text-center mb-6 text-[#ffa500]">About AgriEn</h2>
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

export default AboutSlider;