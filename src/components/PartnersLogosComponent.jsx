import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


import peaceParksLogo from '../assets/sliderimg/partner logos/download (4).png';
import ntbcLogo from '../assets/sliderimg/partner logos/NTBC.png';
import medaLogo from '../assets/sliderimg/partner logos/Meda.png';
import worldVisionLogo from '../assets/sliderimg/partner logos/World Vision.png';
import dPrizeLogo from '../assets/sliderimg/partner logos/Dprize.png';
import roddenberryLogo from '../assets/sliderimg/partner logos/RoddenberryLogoResized2.png';
import wemakeChangeLogo from '../assets/sliderimg/partner logos/we_make_change_now_logo.jpg';
import sdbzmbLogo from '../assets/sliderimg/partner logos/Don Bosco.png';
import waginienLogo from '../assets/sliderimg/partner logos/wagninien university.png';
import idinLogo from '../assets/sliderimg/partner logos/IDIN.png';
import SBS from '../assets/sliderimg/partner logos/Street business school.PNG';
import SNV from '../assets/sliderimg/partner logos/SNV.jpg';

export default function PartnersListComponent() {
  const [showAll, setShowAll] = useState(false);

  const partners = [
    { name: "Peace Parks Foundation", logo: peaceParksLogo, url: "https://www.peaceparks.org" },
    { name: "National Technology Business Centre (NTBC)", logo: ntbcLogo, url: "https://www.ntbc.co.zm" },
    { name: "SNV", logo:SNV, url: "https://www.snv.org" },
    { name: "MEDA (Mennonite Economic Development Associates)", logo: medaLogo, url: "https://www.meda.org" },
    { name: "World Vision", logo: worldVisionLogo, url: "https://www.wvi.org" },
    { name: "D-Prize", logo: dPrizeLogo, url: "https://www.d-prize.org" },
    { name: "Roddenberry Foundation", logo: roddenberryLogo, url: "https://roddenberryfoundation.org" },
    { name: "Street Business School", logo: SBS, url: "https://www.streetbusinessschool.org" },
    // { name: "Netherlands Food Partnership", logo: null, url: "https://www.nlfoodpartnership.com" },
    { name: "WeMake Change", logo: wemakeChangeLogo, url: "https://www.wemakechange.org" },
    { name: "Salesians of Don Bosco", logo: sdbzmbLogo, url: "https://sdbzmb.org/lusaka-makeni/" },
    { name: "Wagninien University", logo: waginienLogo, url: "https://www.wur.nl/" },
    { name: "International Development and Innovation Network", logo: idinLogo, url: "https://www.idin.org/about-idin" },
  ];
  
  const visiblePartners = showAll ? partners : partners.slice(0, 6);

  return (
    <div className="py-2 bg-gray-100 min-h-screen lg:translate-y-[-50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-[#46923c] mb-4"> Partners and Clients</h1>
          {/* <p className="text-lg text-gray-700 mb-8">
            We collaborate with leading organizations to empower smallholder farmers and youth across Zambia.
          </p> */}
        </motion.div>

        {/* Partners Logos Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {visiblePartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-xl transition duration-300"
            >
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                {/* Render the logo if it exists */}
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto max-w-[200px] object-contain transition duration-300 group-hover:opacity-80"
                  />
                ) : (
                  <div className="w-full h-24 bg-gray-200 flex justify-center items-center text-gray-600 font-semibold text-sm border-t-4 border-[#46923c]">
                    <p>{partner.name}</p>
                  </div>
                )}

              
                {partner.logo && (
                  <div className="w-full mt-2 bg-[#46923c] text-white py-2 text-center border-t-4 border-[#fff]">
                    <p className="text-sm font-semibold">{partner.name}</p>
                  </div>
                )}

                
                <motion.div
                  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-lg font-semibold p-2 transition duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Website
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Partners Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#46923c] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#367529] transition duration-300"
          >
            {showAll ? "See Fewer Partners" : "See All Partners"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}




