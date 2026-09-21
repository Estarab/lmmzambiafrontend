import React, { useEffect, useState } from 'react';
import programImage1 from '../assets/sliderimg/pro5.jpg'; 
import programImage2 from '../assets/sliderimg/pro1.jpg'; 
import programImage3 from '../assets/sliderimg/pro4.jpg'; 
import programImage4 from '../assets/sliderimg/pro6.jpg'; 
import programImage5 from '../assets/sliderimg/pro2.jpeg'; 
import programImage6 from '../assets/sliderimg/pro7.jpeg'; 
//import programImage7 from '../assets/sliderimg/agrien images/cherry-tomatoes-lettuce-basil-5606443.jpg'; 

const programs = [
  {
    title: 'Agri based co working space',
    description: 'The AgriEn Hub co - working space offers an open environment for startups, Free-lance Agri-Consultants...',
    imgSrc: programImage1,
    fullText: 'The AgriEn Hub co - working space offers an open environment for startups, Free-lance Agri-Consultants and generally partners in the Food system. The place consists of open working spaces with permanent desks and moveable desks including a training room for meetings, workshops and hosting of agrievents.',
  },
  {
    title: 'Enhancing Farmer Productivity',
    description: 'Through our partnership with various agri based companies and stakeholders, AgriEn helps farmers...',
    imgSrc: programImage2,
    fullText: 'Through our partnership with various agri based companies and stakeholders, AgriEn helps farmers to understand the role of modern agricultural technologies and creates opportunities for adoption. This support includes access to certified seed, soil health services and products, land and irrigation systems, training on various farming and business skills, enterprise development and market linkages.',
  },
  {
    title: 'Agri-Events',
    description: 'From time to time, AgriEn Network holds various activities under various themes with the sole purpose of linking various actors in the food system...',
    imgSrc: programImage3,
    fullText: 'From time to time, AgriEn Network holds various activities under various themes with the sole purpose of linking various actors in the food system. This is also anchored on dialogues, meetings and Community of Practice (CoP), localised market and fairs such as the Makeni Farmers Market and agri business platforms etc.',
  },
  {
    title: 'Sku2Farm',
    description: 'The school-to-farm program has been developed and designed to get students and generally the youth excited...',
    imgSrc: programImage4,
    fullText: 'The school-to-farm program has been developed and designed to get students and generally the youth excited about food production and primary processing. It is aimed at also promoting Agri-careers and to inspire young minds between the ages of 7- 18 years towards pursuing agricultural careers.',
  },
  {
    title: 'Agri Trade Mission',
    description: 'AgriEn facilitates agri based local and international tours and expositions. This can be sector...',
    imgSrc: programImage5,
    fullText: 'AgriEn facilitates agri based local and international tours and expositions. This can be sector specific, Value chain, Private or Public sector. These are designed education tours that highlight opportunities for investment in Zambia. The key objective is to work together to explore opportunities for Business 2 Business partnerships',
  },
  {
    title: 'Street Business School',
    description: 'The Street Business School program is a one of a kind livelihood training curriculum that empowers...',
    imgSrc: programImage6,
    fullText: 'The Street Business School program is a one of a kind livelihood training curriculum that empowers women living in poverty with the tools they need to successfully start and grow microbusinesses. The program is designed for the localization and for those who may not have a significant formal education, plus it includes critical confidence building components.',
  },
  // {
  //   title: 'Program',
  //   description: '..',
  //   imgSrc: programImage7,
  //   fullText: '.',
  // },
];

const ProgramsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleReadMore = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  // Function to truncate text to 50 words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  // Function to format full text into lines of 50 words
  const formatFullText = (text, wordLimit) => {
    const words = text.split(" ");
    let formattedText = [];
    for (let i = 0; i < words.length; i += wordLimit) {
      formattedText.push(words.slice(i, i + wordLimit).join(" "));
    }
    return formattedText.join("\n\n"); 
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#46923c] mb-2"></h1>
        <p className="text-lg text-gray-700 mb-4">
        Our Programmes aim to accelerate the address of challenges in the local Food Systems. The address is anchored on the following ongoing programmes. In all our programme we endeavor to promote co-creation and collective impact. 
        </p>
      </header>

      {/* Programs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md transition-transform duration-500 hover:shadow-xl transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={program.imgSrc}
              alt={program.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-[#46923c] mb-2">{program.title}</h2>
              <p className="text-gray-700">{truncateText(program.description, 50)}</p>
              <button
                className="mt-4 bg-gradient-to-r from-[#ffa500] to-[#ffa500] text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
                onClick={() => handleReadMore(program)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full overflow-y-auto p-8 relative">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 text-4xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-green-600 mb-4 text-center">{selectedProgram.title}</h2>
            <img
              src={selectedProgram.imgSrc}
              alt={selectedProgram.title}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 text-2xl text-center \\\\\\\\\\-8 whitespace-pre-wrap">{formatFullText(selectedProgram.fullText, 50)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsComponent;



