import React from 'react';
import { FaStar } from 'react-icons/fa'; 

const WeStriveTo = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-green-100 text-green-600">
      <h2 className="text-4xl font-bold mb-6">We Strive To</h2>
      <p className="text-2xl mb-10 max-w-2xl text-center animate-fadeIn">
        In All We Do We Strive To
      </p>
      <ul className="list-none space-y-6">
        {[
          "Collectively enhance social and economic outcomes.",
          "Enhance food, utilisation, access and availability.",
          "Collectively promote environmental outcomes."
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-3 animate-bounceIn">
            <FaStar className="text-orange-500 text-3xl" />
            <span className="text-2xl font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        .animate-bounceIn {
          animation: bounceIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WeStriveTo;
