import React from 'react';
import logo1 from '../assets/sliderimg/agrien images/logo1.jpg'; // Update with your actual logo paths
 import logo2 from '../assets/sliderimg/agrien images/logo2.jpg';
 import logo3 from '../assets/sliderimg/agrien images/logo3.jpg';
 import logo4 from '../assets/sliderimg/agrien images/logo4.jpg';
 import logo5 from '../assets/sliderimg/agrien images/logo5.jpg';


const partnersData = [
  { name: 'Partner 1', logo: logo1 },
  { name: 'Partner 2', logo: logo2 },
  { name: 'Partner 3', logo: logo3 },
  { name: 'Partner 4', logo: logo4 },
  { name: 'Partner 5', logo: logo5 },
];

const OurPartners = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#46923c]">Partners and Clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {partnersData.map((partner, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300 ease-in-out"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-48 h-48 object-contain animate-blink" 
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default OurPartners;



