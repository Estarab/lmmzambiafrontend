import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider2 from './ImageSlider2';

const ImageSlider1 = () => {
  return (
    <div className="relative w-full h-screen">
      <ImageSlider2 />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center bg-white bg-opacity-0"> {/* Changed background to white with opacity */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn"> {/* Optional: Add title text here */}</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fadeIn">
          {/* Our mission is to rehabilitate homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. */}
        </p>
        {/* <a
          href="/donate"
          className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full mt-60 transition-transform transform hover:scale-105 animate-bounce"
        >
          Donate
        </a> */}
        <Link
          to='/remember-me-project-page'
        //   className='text-xs sm:text-sm text-teal-500 font-bold hover:underline text-center mt-2'
         className="bg-orange-400 text-white text-sm font-semibold py-1 px-6 rounded-full mt-60 transition-transform transform hover:scale-105 animate-bounce brightness-100"
        >
          Learn More About AgriEn
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider1;


