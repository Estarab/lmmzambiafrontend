import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/sliderimg/agrien images/award.jpg';
import image2 from '../assets/sliderimg/agrien images/butaro-district-hospital-building-m181120-ib.jpg';
import image3 from '../assets/sliderimg/agrien images/capacity building.jpeg';

const images = [
  { url: image1, title: 'Our Vision : Fostering partnerships and opportunities that contribute to Africa’s Food.' },
  { url: image2, title: 'Our Mission : Building sustainable food systems for a food secure Zambia.' },
  { url: image3, title: 'Our Target : service the Agribusiness Eco system.' },
];

const ImageSlider = () => {
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
    <div className="w-full max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.url} alt={image.title} className="w-full h-auto object-cover" />
            <div className="absolute bottom-0 bg-green-700 bg-opacity-100 w-full text-center p-2 text-white brightness-150">
              <h3 className="text-2xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
