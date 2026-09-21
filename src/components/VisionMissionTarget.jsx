import React from 'react';
import logoWatermark from '../assets/sliderimg/agrien images/Logo-Final.png'; 

const VisionMission = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-16 bg-green-600 text-white">
      <img
        src={logoWatermark}
        alt="Watermark Logo"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 max-w-2xl text-center">
        {/* Vision Section */}
        <h2 className="text-6xl font-bold mb-6 text-white animate-fadeIn animate-delay-1000 brightness-200">Our Vision</h2>
        <p className="text-2xl mb-10 text-white animate-slideIn animate-delay-2000 brightness-200">
        Fostering partnerships and opportunities that contribute to Africa’s Food.
        </p>

        {/* Mission Section */}
        <h2 className="text-6xl font-bold mb-6 text-white animate-fadeIn animate-delay-3000">Our Mission</h2>
        <p className="text-2xl mb-10 text-white animate-slideIn animate-delay-4000">
        Building sustainable food systems for a food secure Zambia.
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 1s ease-in-out forwards;
        }
        .animate-delay-1000 {
          animation-delay: 1s;
        }
        .animate-delay-2000 {
          animation-delay: 2s;
        }
        .animate-delay-3000 {
          animation-delay: 3s;
        }
        .animate-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default VisionMission;
