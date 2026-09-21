import React from 'react';
import Slider from 'react-slick';

// Import images from the assets folder
import image1 from '../assets/sliderimg/pro1.jpg';
import image2 from '../assets/sliderimg/pro2.jpeg';
import image3 from '../assets/sliderimg/s3.jpg';
// import image4 from '../assets/sliderimg/agrien images/capacity building.jpeg';
// import image5 from '../assets/sliderimg/agrien images/img5.jpg';

const ProgramsSlider = () => {
  const images = [
    { src: image1, title: 'Enhancing Farmer Productivity' },
    { src: image2, title: 'Agri-Events' },
    { src: image3, title: 'Sku2Farm' },
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
      <h2 className="text-4xl font-bold text-center mb-6 text-[#ffa500]">Our Programs</h2>
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-4xl text-[#46923c] font-semibold text-center ">{image.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProgramsSlider;