import React, { useState, useEffect } from 'react';
import image1 from '../assets/sliderimg/img1.jpg';
import image2 from '../assets/sliderimg/img2.jpg';
import image3 from '../assets/sliderimg/img3.jpg';
import image4 from '../assets/sliderimg/img4.jpg';
import image5 from '../assets/sliderimg/img5.jpg';

const images = [
  { src: image1, title: "Agribusiness and Agri Energy", description: " Focusing on sustainable food production and the efficient use of renewable resources to enhance economic viability." },
  { src: image2, title: "Building Sustainable Food Systems", description: "We create resilient agricultural practices that prioritize environmental health and economic viability to ensure access to nutritious food for all" },
  { src: image3, title: " Agri-Energy Solutions", description: "We specialize in developing renewable energy solutions from agricultural waste to reduce costs and minimize environmental impact" },
  { src: image4, title: "Research and Development in Agri-Tech", description: "We drive advancements in agricultural technology to improve productivity and sustainability for modern farming" },
  { src: image5, title: "Collaborative Partnerships for Growth", description: "Fostering partnerships with various stakeholders to support agribusiness and agri-energy initiatives" },
];

const ImageSlider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000  ease-in-out ${
            index === currentIndex
              ? 'transform scale-100 opacity-100'
              : 'transform scale-50 opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover filter brightness-70 " 
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-60 flex items-center justify-center flex-col text-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg brightness-150 ">{image.title}</h2>
            <p className="text-white text-xl md:text-3xl max-w-lg drop-shadow-lg mb-12 brightness-100">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider2;