import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 

const OurTarget = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white text-green-600">
      <h2 className="text-6xl font-bold mb-6">Our Target</h2>
      <p className="text-2xl mb-10 max-w-2xl text-center">
      Our initiatives seek to service the Agribusiness Eco system specifically focusing on linking the following.
      </p>
      <ul className="list-none space-y-6">
        {[
          "Research and Development Institutions.",
          "Private Sector.",
          "Public Sector.",
          "Civil Society Organizations.",
          "Farmer Groups/Enterprises."
        ].map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <FaCheckCircle className="text-orange-600 text-3xl" />
            <span className="text-2xl">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurTarget;
