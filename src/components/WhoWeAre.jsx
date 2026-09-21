import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white text-[#46923c]">
      <h2 className="text-4xl font-bold mb-6 animate-slideIn">Who We Are</h2>
      <p className="text-xl mb-10 max-w-2xl text-center animate-fadeIn">
      AgriEn Network (Agribusiness and Agri Energy) is focused on accelerating the development and delivery of innovative and sustainable interventions in food security by various partners. AgriEn Network was established in 2020 following the transition of AgriProFocus Global Network into the Netherlands Food Partnership (This realisation birthed an independent localised social enterprise). NFP and AgriEn Network have a common focus on achieving Food security from a food system approach through collaboration.
      </p>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 1s ease-in-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
          animation-delay: 0.5s; /* Delay for the paragraph */
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;
