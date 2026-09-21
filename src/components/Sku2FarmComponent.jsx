import React from 'react';
import Slider from 'react-slick'; 
import { FaSeedling, FaIndustry, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import CountUp from 'react-countup';

// import galleryImage1 from '../assets/sku2farm/WhatsApp Image 2025-01-16 at 20.53.15 (1).jpeg'; 
import galleryImage2 from '../assets/sku2farm/_DSC0054.jpg';
import galleryImage3 from '../assets/sku2farm/_DSC0112.jpg';
import galleryImage4 from '../assets/sku2farm/Sku2farm cover pictures.jpg';
import galleryImage5 from '../assets/sku2farm/WhatsApp Image 2024-11-26 at 22.14.47-4.jpeg';


const Sku2FarmComponent = () => {
    // Define the images for the slider
    const sliderImages = [
        // { src: galleryImage1, title: '' },
        { src: galleryImage2, title: '' },
        { src: galleryImage3, title: ' ' },
        { src: galleryImage4, title: ' ' },
        { src: galleryImage5, title: ' ' },
    ];

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-4">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-16 mt-12">
                    <h1 className="text-4xl font-bold text-[#46923c] mb-2 animate__animated animate__fadeIn animate__delay-1s">
                        Sku2Farm Program
                    </h1>
                    <p className="text-lg text-gray-700 mb-2 animate__animated animate__fadeIn animate__delay-2s">
                        Sku2Farm aims to spark interest in agriculture among youth (ages 7-18), promoting agri-careers and inspiring the next generation of resilient food champions to support sustainable food systems.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="w-full mb-4">
                    <Slider {...settings}>
                        {sliderImages.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-auto object-contain max-h-[500px] rounded-lg mb-4"
                                />
                                <h3 className="text-3xl font-semibold text-center text-[#46923c]">{image.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Reach Section with Animated Numbers */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Our Reach</h2>
                    <div className="flex justify-center gap-16">
                        <div className="flex flex-col items-center">
                            <CountUp start={0} end={150} duration={3} className="text-4xl font-bold text-[#46923c]" />
                            <p className="text-lg text-gray-700">Children and youth aged 7 to 18, cultivating early awareness and passion for agriculture and sustainable food production.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
    <h2 className="text-3xl font-semibold text-[#46923c] mb-6">Our Interventions</h2>

    {/* Container for the table, making it scrollable on smaller screens */}
    <div className="overflow-x-auto">
        <div className="block lg:hidden">
            {/* Mobile View (Card Style) */}
            <div className="space-y-6">
                {/* Awareness & Agri-Entrepreneurship Card */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                    <FaIndustry className="text-3xl text-[#46923c] mb-4" />
                    <h3 className="text-xl font-semibold text-[#46923c] mb-2">Awareness & Agri-Entrepreneurship</h3>
                    <p className="text-lg text-gray-700">Field visits, career fairs, industry challenges, and training sessions to introduce students to diverse agricultural careers and entrepreneurial paths, breaking stereotypes and showcasing modern, high-tech agriculture.</p>
                </div>

                {/* Creative Capacity Building Card */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                    <FaHandsHelping className="text-3xl text-[#46923c] mb-4" />
                    <h3 className="text-xl font-semibold text-[#46923c] mb-2">Creative Capacity Building</h3>
                    <p className="text-lg text-gray-700">Hosting boot camps, maker fairs, and agri-hackathons to encourage solution-oriented thinking, climate adaptation, and skills development for future agri-business opportunities.</p>
                </div>

                {/* Climate-Smart Food Systems Card */}
                <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
                    <FaLeaf className="text-3xl text-[#46923c] mb-4" />
                    <h3 className="text-xl font-semibold text-[#46923c] mb-2">Climate-Smart Food Systems</h3>
                    <p className="text-lg text-gray-700">Establishing school-based Climate Smart Corners to teach sustainable farming, climate impact on food security, and foster climate-smart practices.</p>
                </div>
            </div>
        </div>

        {/* Desktop View (Table Style) */}
        <div className="hidden lg:block">
            <table className="min-w-full bg-white shadow-lg rounded-lg border-separate border-spacing-0">
                <thead className="bg-[#46923c] text-white">
                    <tr>
                        <th className="px-6 py-3 text-left text-xl text-center">Intervention</th>
                        <th className="px-6 py-3 text-left text-xl text-center">Description</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {/* Awareness & Agri-Entrepreneurship Row */}
                    <tr className="bg-slate-200 hover:bg-gray-100 transition-all">
                        <td className="px-6 py-4 flex items-center space-x-4">
                            <FaIndustry className="text-3xl text-[#46923c]" />
                            <span className="font-semibold">Awareness & Agri-Entrepreneurship</span>
                        </td>
                        <td className="px-6 py-4">Field visits, career fairs, industry challenges, and training sessions to introduce students to diverse agricultural careers and entrepreneurial paths, breaking stereotypes and showcasing modern, high-tech agriculture.</td>
                    </tr>

                    {/* Creative Capacity Building Row */}
                    <tr className="bg-slate-100 hover:bg-gray-100 transition-all">
                        <td className="px-6 py-4 flex items-center space-x-4">
                            <FaHandsHelping className="text-3xl text-[#46923c]" />
                            <span className="font-semibold">Creative Capacity Building</span>
                        </td>
                        <td className="px-6 py-4">Hosting boot camps, maker fairs, and agri-hackathons to encourage solution-oriented thinking, climate adaptation, and skills development for future agri-business opportunities.</td>
                    </tr>

                    {/* Climate-Smart Food Systems Row */}
                    <tr className="bg-slate-200 hover:bg-gray-100 transition-all">
                        <td className="px-6 py-4 flex items-center space-x-4">
                            <FaLeaf className="text-3xl text-[#46923c]" />
                            <span className="font-semibold">Climate-Smart Food Systems</span>
                        </td>
                        <td className="px-6 py-4">Establishing school-based Climate Smart Corners to teach sustainable farming, climate impact on food security, and foster climate-smart practices.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>




               {/* Highlights Section */}
               <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Program Highlights</h2>
                    <ul className="text-lg text-gray-700">
                        <li>Organized Sku2Farm sessions at schools and events, including the Junior Farmer Agriculture Show, engaging youth in agricultural learning.</li>
                        <li>Reached 150 children as of 2024, sparking interest in agriculture careers.</li>
                        <li>Strengthened program reach and impact through partnerships, helping nurture a generation of young innovators in sustainable food systems.</li>
                    </ul>
                </div>
               

                {/* Partners Section */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-[#46923c] mb-6">Our Partners</h2>
                    <ul className="text-lg text-gray-700">
                        <li>Zambia Honey Partnership Platform (ZHPP)</li>
                        <li>Zambia National Forestry Commodities Association (ZNFCA)</li>
                        <li>Junior Agriculture Show</li>
                        <li>Agrilearn</li>
                        <li>Partner schools (e.g., DASO, Cobet Community School, Tunab School)</li>
                    </ul>
                </div>

               

            </div>
        </div>
    );
};

export default Sku2FarmComponent;



