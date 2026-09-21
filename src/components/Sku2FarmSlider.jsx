import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import galleryImage1 from '../assets/sku2farm/_DSC0021.jpg';
import galleryImage2 from '../assets/sku2farm/_DSC0054.jpg';
import galleryImage3 from '../assets/sku2farm/_DSC0112.jpg';
import galleryImage4 from '../assets/sku2farm/Sku2farm cover pictures.jpg';
import galleryImage5 from '../assets/sku2farm/Sku2farm cover pictures.jpg';
import galleryImage6 from '../assets/sku2farm/WhatsApp Image 2024-11-26 at 22.14.47-4.jpeg';

const Sku2FarmSlider = () => {
  
  const images = [
    { src: galleryImage1, title: 'Partnerships' },
    { src: galleryImage2, title: 'Knowledge Sharing' },
    { src: galleryImage3, title: 'Research' },
    { src: galleryImage4, title: 'Technology Adoption' },
    { src: galleryImage5, title: 'Capacity Building' },
    { src: galleryImage6, title: 'Sustainability' },
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
      <h2 className="text-4xl font-bold text-center mb-6 text-[#46923c]">What We Do</h2>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-semibold text-center text-[#ffa500]">{image.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sku2FarmSlider;











