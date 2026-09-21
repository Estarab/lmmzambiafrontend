import React, { useEffect, useState } from 'react';
import image1 from '../assets/sliderimg/1-2.jpg'; 
import image2 from '../assets/sliderimg/s1.jpg';
import image3 from '../assets/sliderimg/agrien images/DSC0225.jpg';

const services = [
  {
    title: 'Relationship Brokering & Stakeholder Engagement Facilitation',
    description: 'Neutral conveyor for Project Kick Off, Consultative meetings, Project Review Meetings, Policy dialogue and advocacy sessions etc.',
    imgSrc: image1,
  },
  {
    title: 'Knowledge Management (Acquisition and Transfer)',
    description: 'Market Scans, Sector Mapping, Agri-Master Classes/Boot camps, Community of Practice, Eco-system mapping and research.',
    imgSrc: image2,
  },
  {
    title: 'Acquisition and Investment facilitation',
    description: 'Business Investor match making and provision of business development support services (Market linkages) to Agriprenuers.',
    imgSrc: image3,
  },
];

const ServiceComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // Delay for initial visibility
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#46923c] mb-2">Agri-Innovation Management and Promotion</h1>
        <p className="text-lg text-gray-700">
        Agri based creative capacity building sessions, Agri-Idea to Market facilitation, Open Innovation in Agri-based organizations, Innovation/New product Show casing (Including Demo plot)
        </p>
      </header>

      {/* Service Sections */}
      {services.map((service, index) => (
        <div className={`flex flex-col md:flex-row items-center mb-8`} key={index}>
          {/* Image Section */}
          <div
            className={`flex-none w-full md:w-64 h-64 transition-transform duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={service.imgSrc}
              alt={service.title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          {/* Text Section */}
          <div
            className={`flex-1 p-5 transition-transform duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative bg-gradient-to-r from-[#46923c] to-[#46923c] p-5 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
              <p className="text-base md:text-lg text-white">{service.description}</p>
              {/* Triangle Shape for Text Background */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-16 border-l-transparent border-r-16 border-r-transparent border-b-16 border-b-green-400 transform translate-y-4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceComponent;




