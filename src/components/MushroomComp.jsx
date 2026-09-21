import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaSeedling, FaChartLine, FaUserFriends, FaExchangeAlt } from 'react-icons/fa';
import CountUp from 'react-countup';


import galleryImage1 from '../assets/mushroom/_DSC0203.jpg';
import galleryImage2 from '../assets/mushroom/_DSC0227.jpg';
import galleryImage3 from '../assets/mushroom/_DSC0265.jpg';



import rodderberryLogo from '../assets/sliderimg/partner logos/RoddenberryLogoResized2.png';

const MushroomComp = () => {
    
    const sliderImages = [
        { src: galleryImage1, title: '' },
        { src: galleryImage2, title: '' },
        { src: galleryImage3, title: '' },
        // { src: galleryImage7, title: '' },
    ];

    const galleryImages = [galleryImage1, galleryImage2, galleryImage3];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [showAllImages, setShowAllImages] = useState(false);

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16 mt-24">
                <h1 className="text-4xl font-bold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    SHFAP Mushroom Value Chain
                </h1>
                <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s">
                    AgriEn, with the support of the Roddenberry Foundation, USA, runs the Smallholder Farmer Acceleration Program (SHFAP) for the Mushroom Value Chain. 
                    The aim of the Mushroom SHFAP is to increase household income and food security through input support and training of best practices in 
                    Makeni, Lilayi, Chilanga, Chawama, Lusaka West and surrounding areas.
                </p>
            </div>

           


            
            <div className="text-center mb-16">
                {/* <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Gallery</h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {(showAllImages ? galleryImages : galleryImages.slice(0, 3)).map((image, index) => (
                        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
                            <img src={image} alt={`Mushroom SHFAP ${index + 1}`} className="w-full h-64 object-cover" />
                        </div>
                    ))}
                </div>

                {/* Toggle Button for Gallery */}
                {/* <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAllImages(!showAllImages)}
                        className="text-xl text-[#46923c] hover:text-green-600 font-semibold"
                    >
                        {showAllImages ? "See less images" : "See more images"}
                    </button>
                </div> */}
            </div>



           
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-[#46923c] mb-4">Locations</h2>
                <p className="text-lg text-gray-700">Lusaka i.e. Makeni, Lilayi, Chilanga, Chawama, Lusaka West and surrounding areas</p>
            </div>

           
            <div className="max-w-7xl mx-auto text-center mb-16">
                <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-[#46923c] text-white">
                            <th className="px-6 py-4 text-2xl">Specific Objectives</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-6 py-4 text-xl">Increase Mushroom Production to at least 750 grams per 3kg bag</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-xl">Provide seed/input loans to farmers with a structured repayment after harvest.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-xl">Establish a reliable market access system through the brokering sale of at least 80% of participating farmers' produce</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-xl">Increase opportunities for household income generation</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Reach Section - Animated Numbers */}
            <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Our Target</h2>
                <div className="flex justify-center gap-16">
                    <div className="flex flex-col items-center">
                        <CountUp start={0} end={50} duration={3} className="text-4xl font-bold text-[#46923c]" />
                        <p className="text-xl text-gray-700">Farmers in Makeni, Lilayi, Chilanga, Chawama, Lusaka West</p>
                    </div>
                </div>
            </div>

            {/* Interventions Section - Icons */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-semibold text-[#46923c] mb-6">Our Interventions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <FaSeedling className="text-4xl text-[#46923c] mb-4" />
                        <h3 className="text-xl font-semibold">Access to Inputs</h3>
                        <p className="text-lg text-gray-700">Start right with certified and affordable input with SeedLoans available to cover 65% of the start up kit.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaExchangeAlt className="text-4xl text-[#46923c] mb-4" />
                        <h3 className="text-xl font-semibold">Access to Markets</h3>
                        <p className="text-lg text-gray-700">Direct connection to buyers through AgriEn.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaUserFriends className="text-4xl text-[#46923c] mb-4" />
                        <h3 className="text-xl font-semibold">Extension Services</h3>
                        <p className="text-lg text-gray-700">Guidance at every step, from setup to harvest.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaChartLine className="text-4xl text-[#46923c] mb-4" />
                        <h3 className="text-xl font-semibold">Opportunities to Scale</h3>
                        <p className="text-lg text-gray-700">Expand into new mushroom varieties and processing.</p>
                    </div>
                </div>
            </div>

            {/* Supporting Partner Section */}
            <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Supporting Partner</h2>
                <div className="flex justify-center gap-4 items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={rodderberryLogo} alt="Roddenberry Foundation Logo" className="w-32 h-32 object-contain hover:scale-110 transform transition duration-300 mb-4"/>
                    </a>
                </div>
                <p className="text-lg text-gray-700">Roddenberry Foundation</p>
            </div>

            
        </div>
    );
};

export default MushroomComp;




