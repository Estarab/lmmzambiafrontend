import React from 'react';
import zambiaMap from '../assets/sliderimg/agrien images/map.png'; 

const provincesWithReach = [
  { name: 'Luapula', style: { top: '18%', left: '60%', width: '10px', height: '10px' } },
  { name: 'NorthWestern', style: { top: '45%', left: '38%', width: '10px', height: '10px' } },
  { name: 'CopperB', style: { top: '47%', left: '49%', width: '10px', height: '10px' } },
  { name: 'Southern', style: { top: '80%', left: '45%', width: '10px', height: '10px' } },
  { name: 'Lusaka', style: { top: '68%', left: '55%', width: '10px', height: '10px' } },
  { name: 'Central', style: { top: '59%', left: '50%', width: '10px', height: '10px' } },
  { name: 'Eastern', style: { top: '55%', left: '64%', width: '10px', height: '10px' } },
];

const OurReach = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#46923c]">Our Reach</h2>
      <div className="relative">
        <img src={zambiaMap} alt="Map of Zambia" className="w-1/2 h-auto mx-auto" /> 
        {provincesWithReach.map((province, index) => (
          <div
            key={index}
            className="absolute bg-[#46923c] opacity-75 rounded-full animate-blink cursor-pointer"
            style={{
              ...province.style,
              position: 'absolute',
              transition: 'transform 0.3s',
            }}
            title={province.name}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default OurReach;
