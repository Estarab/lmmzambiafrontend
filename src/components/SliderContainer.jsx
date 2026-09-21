// SliderContainer.jsx
import React, { useState, useEffect } from 'react';
import DesktopSlider from './DesktopSlider';
import MobileSlider from './MobileSlider';
// import Header from './Header'; // Import the Header component

const SliderContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* <Header /> Header with video background */}
      <div className="relative w-full mt-[-10px]">
        {isMobile ? <MobileSlider /> : <DesktopSlider />}
      </div>
    </div>
  );
};

export default SliderContainer;



