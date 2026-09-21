import React from 'react';

const VisionMissionScroll = () => {
  return (
    <div className="vision-mission-container py-4 bg-[#46923c] text-white">
      <div className="overflow-hidden">
        <div className="scrolling-text flex animate-scroll-left">
          <span className="mr-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
            <strong>Our Vision:</strong> Foster partnerships that enhance food security in Africa
          </span>
          <span className="mr-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
            <strong>Our Mission:</strong> Build sustainable food systems for a food-secure Zambia.
          </span>
          {/* Optional additional text */}
          {/* <span className="mr-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold">
            <strong>Our Goal:</strong> Improve local food systems and reduce poverty in Africa.
          </span> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite; /* duration to ensure the text scrolls fully */
        }
        .vision-mission-container {
          background-color: #46923c;
          padding-top: 16px;
          padding-bottom: 16px;
        }
        .scrolling-text {
          display: flex;
          white-space: nowrap;
        }
        .scrolling-text span {
          margin-right: 40px; /* Add space between items */
        }
      `}</style>
    </div>
  );
};

export default VisionMissionScroll;


