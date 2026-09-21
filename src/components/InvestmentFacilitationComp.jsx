import React from 'react';
import { FaRegDotCircle } from 'react-icons/fa'; 
import image1 from '../assets/services/Investment-Facilitation/AgriEvents .jpeg'; 
import image2 from '../assets/services/Investment-Facilitation/Investment faciliation (1).jpg';
import image3 from '../assets/services/Investment-Facilitation/Investment Faciliation.jpg';

const InvestmentFacilitationComp = () => {
  return (
    <div className="container mx-auto px-6 py-12 bg-slate-50 rounded-lg shadow-lg mt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#46923c] mb-2">
          Our Agri Investment Services
        </h2>
        {/* <p className="text-lg text-gray-700">
        We provide a wide range of services that facilitate Agri Investment.
        Here are some of the offerings:
        </p> */}
      </div>

      {/* List Section with Icons as Bullets */}
      <div className="flex justify-center mb-12">
        <ul className="list-none space-y-4">
          <li className="flex items-center space-x-4">
            <FaRegDotCircle className="text-[#46923c] text-2xl" />
            <span className="text-lg text-gray-800">Hosting of Agri Investment Platforms</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaRegDotCircle className="text-[#46923c] text-2xl" />
            <span className="text-lg text-gray-800">Investment Profiling</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaRegDotCircle className="text-[#46923c] text-2xl" />
            <span className="text-lg text-gray-800">Business-to-Business Agri Events</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaRegDotCircle className="text-[#46923c] text-2xl" />
            <span className="text-lg text-gray-800">Investment Expositions</span>
          </li>
        </ul>
      </div>

      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="w-full h-60 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <img src={image1} alt="Agri Investment" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-60 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <img src={image2} alt="Agri Event" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-60 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
          <img src={image3} alt="Investment Exposition" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentFacilitationComp;




