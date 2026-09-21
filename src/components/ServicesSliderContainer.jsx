// SliderContainer.jsx
import React, { useState, useEffect } from 'react';
import DesktopServicesSlider from './DesktopServicesSlider';
import MobileServicesSlider from './MobileServicesSlider';
import Header from './Header'; 
const ServicesSliderContainer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Header /> {/* Header with video background */}
      <div className="relative w-full mt-[-10px]">
        {isMobile ? <MobileServicesSlider /> : <DesktopServicesSlider />}
      </div>
    </div>
  );
};

export default ServicesSliderContainer;