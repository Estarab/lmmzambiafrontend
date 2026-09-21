import React, { useEffect, useState } from 'react';

 import AchievementsSection from '../components/AchievementsSection';

const achievementsData = [
  {
    figure: '15,000+',
    description:
      '15,000+ Small-holder farmers reached across agri-events hosted in partnership with World Vision Zambia in 4 provinces namely Katete, Mpika, Kasama and Luwingu.',
  },
  {
    figure: '300+',
    description:
      'Reach of over 300 soya bean farmers for certified input and extension services in Sinda district under the smallholder farmer acceleration program (SHFAP) since its inception in 2021.',
  },
  {
    figure: '150+',
    description: 'Reach of 150 children under sku2farm.',
  },
 
  {
    figure: '2000+',
    description: 'Developed a network of 2000+ stakeholders in the Zambian agri-industry.',
  },
];

const Achievements = () => {
  const [counts, setCounts] = useState(Array(achievementsData.length).fill(0));
  const [progress, setProgress] = useState(Array(achievementsData.length).fill(0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      achievementsData.forEach((achievement, index) => {
        const target = parseInt(achievement.figure.replace(/,/g, '').replace('+', '')) || 100;

        
        let count = 0;
        let progressValue = 0;

        
        const countInterval = setInterval(() => {
          if (count < target) {
            count += Math.ceil(target / 200); 
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.min(count, target);
              return newCounts;
            });
          } else {
            clearInterval(countInterval);
          }
        }, 30); 

        
        const progressInterval = setInterval(() => {
          if (progressValue < 100) {
            progressValue = Math.min(Math.floor((count / target) * 100), 100);
            setProgress((prevProgress) => {
              const newProgress = [...prevProgress];
              newProgress[index] = progressValue;
              return newProgress;
            });
          } else {
            clearInterval(progressInterval);
          }
        }, 30); 
      });
    }, 35000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 transform lg:translate-y-[-50px]">
      
      <h2 className="text-3xl font-bold text-center mb-6 text-[#46923c]">Our Achievements</h2>

      <div className="overflow-x-auto hidden sm:block">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-[#46923c] text-white">
            <tr>
              <th className="py-3 px-6 text-center">Figure</th>
              <th className="py-3 px-6 text-center">Description</th>
              <th className="py-3 px-6 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {achievementsData.map((achievement, index) => {
              const progressBar = progress[index];

              return (
                <tr key={index} className="border-t hover:bg-gray-100">
                  <td className="py-2 px-6 text-center">
                    {counts[index].toLocaleString() + (achievement.figure.includes('+') ? '+' : '')}
                  </td>
                  <td className="py-2 px-6">{achievement.description}</td>
                  <td className="py-2 px-6">
                    <div className="relative pt-1">
                      
                      <div className="flex mb-2 items-center justify-between">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#46923c] h-2.5 rounded-full"
                            style={{ width: `${progressBar}%` }}
                          ></div>
                        </div>
                      </div>
                      
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          
        </table>
        
      </div>

      
      <div className="sm:hidden grid grid-cols-1 gap-6">
        {achievementsData.map((achievement, index) => {
          const progressBar = progress[index];

          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <h3 className="text-3xl font-bold text-center text-[#46923c]">
                {counts[index].toLocaleString() + (achievement.figure.includes('+') ? '+' : '')}
              </h3>
              <p className="text-center mt-2 text-gray-600">{achievement.description}</p>

              
              
            </div>
          );
        })}
      </div>
      <AchievementsSection/>
    </div>
  );
};

export default Achievements;




