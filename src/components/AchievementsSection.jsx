import React from 'react';


import logo1 from '../assets/sliderimg/partner logos/Dprize.png'; 
import logo2 from '../assets/sliderimg/partner logos/Meda.png'; 
import logo3 from '../assets/sliderimg/partner logos/RoddenberryLogoResized2.png'; 

const winnerAchievements = [
  {
    figure: 'Awardee',
    description:
      'D-prize fellowship for innovative distribution; <1% of applicants selected.',
      description2:
      'read about the award here',
    logo: logo1, 
    url: 'https://d-prize.org/winners/profiles/2022/9/13/agrien-network',
    
  },
  {
    figure: 'Awardee',
    description:
      '2023 Mennonite Economic Development Associate (MEDA) and D Prize Pitch Competition.',
      description2:
      'read about the award here',
    logo: logo2, 
    url: 'https://www.meda.org/the-marketplace/zambian-seed-loan-firm-wins-10000-from-meda-pitch-competition/', // URL for this achievement
  },
  {
    figure: 'Awardee',
    description2:
      'Click here to read about the award',
    description:
      'Awardee of the +1Food security 2024 ',
    description3:
      'Awardee of the +1Food security 2024 ',
    logo: logo3, 
    
    url: 'https://roddenberryfoundation.notion.site/1-Food-Security-Directory-2874677db84647cfa02d474233537af6?p=1383e5778fb98077b243e41bb6fa42b6&pm=c',
  },
];

const WinnerCard = ({ figure, description,description2,description3, logo, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center border-4 border-[#46923c]">
      <h3 className="text-3xl font-semibold text-[#46923c] mb-4">{figure}</h3>
        <div className="flex items-center justify-center mb-4">
         
          <img src={logo} alt={figure} className="w-24 h-24 object-contain" />
        </div>
       
        <p className="text-gray-600 text-sm ">{description}</p>
        <p className="text-blue-600 text-sm py-4 ">{description2}</p>
        <p className="text-white text-sm py-4 ">{description3}</p>
        
      </div>
    </a>
  );
};

const AchievementsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {winnerAchievements.map((achievement, index) => (
          <WinnerCard
            key={index}
            figure={achievement.figure}
            description={achievement.description}
            description2={achievement.description2}
            description3={achievement.description3}
            logo={achievement.logo}
            url={achievement.url} 
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;




