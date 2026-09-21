import React from 'react';
import { FaLeaf, FaSeedling, FaNetworkWired, FaHandshake, FaBookOpen, FaBriefcase, FaBuilding, FaHandsHelping, FaCarrot, FaUtensils, FaRecycle, FaUsers } from 'react-icons/fa';

const GroupedComponents = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 bg-slate-200"> 
      
      <div className="flex flex-col items-center w-full px-2 space-y-4 mb-8">
        <div className="flex flex-col items-center justify-between h-auto bg-slate-100 text-[#000000] rounded-lg shadow-xl p-6 md:p-8"> {/* Slightly brighter yellow background */}
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold mb-4 animate-slideIn text-[#46923c]"> {/* Dark green text */}
            <FaSeedling className="inline-block text-[#ffa500]" /> Who We Are
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-center text-[#000000] font-roboto"> 
            AgriEn Network accelerates sustainable interventions in food security, established in 2020 to achieve food security through collaboration. Our mission is to foster partnerships among various stakeholders in the agribusiness ecosystem to enhance food security across Africa. We focus on integrating innovative solutions that address the challenges of food production, distribution, and accessibility.
          </p>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between w-full px-2 space-y-4 md:space-y-0">
        
    
        <div className="flex flex-col w-full md:w-1/2 px-2 space-y-4 items-center">
          <div className="flex flex-col items-center justify-between h-auto bg-slate-100 text-[#000000] rounded-xl shadow-xl p-8"> {/* Slightly brighter yellow background */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold mb-4 text-[#46923c]"> {/* Dark green text */}
              <FaNetworkWired className="inline-block text-[#ffa500]" /> Our Target
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-4 text-[#000000] font-roboto"> {/* Black text */}
              We aim to promote a sustainable, thriving local food system through:
            </p>
            <div className="flex flex-col md:flex-row justify-between w-full items-center">
              <ul className="list-none flex-1 space-y-2 mb-4 md:mb-0">
                <li className="flex items-center space-x-2">
                  <FaBookOpen className="text-[#ffa500] text-2xl" />
                  <span className="text-lg sm:text-xl md:text-2xl font-roboto">Research Institutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBriefcase className="text-[#ffa500] text-2xl" />
                  <span className="text-lg sm:text-xl md:text-2xl font-roboto">Private Sector</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBuilding className="text-[#ffa500] text-2xl" />
                  <span className="text-lg sm:text-xl md:text-2xl font-roboto">Public Sector</span>
                </li>
              </ul>

              <ul className="list-none flex-1 space-y-2 transform md:translate-x-0 translate-x-[-15%]">
  <li className="flex items-center space-x-2">
    <FaHandsHelping className="text-[#ffa500] text-2xl" />
    <span className="text-lg sm:text-xl md:text-2xl font-roboto">Civil Society</span>
  </li>
  <li className="flex items-center space-x-2">
    <FaCarrot className="text-[#ffa500] text-2xl" />
    <span className="text-lg sm:text-xl md:text-2xl font-roboto">Farmer Groups</span>
  </li>
</ul>

             
            </div>
          </div>
        </div>

       
        <div className="flex flex-col w-full md:w-1/2 px-2 space-y-4">
          <div className="flex flex-col items-center justify-between h-auto bg-slate-100 text-[#000000] rounded-lg shadow-xl p-6"> {/* Slightly brighter yellow background */}
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold mb-4 text-[#46923c]"> {/* Dark green text */}
              <FaHandshake className="inline-block text-[#ffa500]" /> We Strive To
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-center mb-4 text-[#000000] font-roboto"> {/* Black text */}
              Enhance social, economic, and environmental outcomes.
            </p>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-2">
                <FaUtensils className="text-[#ffa500] text-2xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-roboto">Improve access to food</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRecycle className="text-[#ffa500] text-2xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-roboto">Promote sustainability</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-[#ffa500] text-2xl" />
                <span className="text-lg sm:text-xl md:text-2xl font-roboto">Support local communities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        }
      `}</style>
    </div>
  );
};

export default GroupedComponents;



