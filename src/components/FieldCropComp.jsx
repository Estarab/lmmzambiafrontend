import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from '../assets/fieldcropgallery/_DSC0077.jpg';
import image2 from '../assets/fieldcropgallery/_DSC0079.jpg';
import image3 from '../assets/fieldcropgallery/_DSC0084.jpg';
import image4 from '../assets/fieldcropgallery/_DSC0088.jpg';
import image5 from '../assets/fieldcropgallery/_DSC0132.jpg';
import image6 from '../assets/fieldcropgallery/_DSC0137.jpg';
import image7 from '../assets/fieldcropgallery/Farmer shfap.jpg';
import image8 from '../assets/fieldcropgallery/FB_IMG_1652979990276.jpg';

import image10 from '../assets/fieldcropgallery/WhatsApp Image 2024-11-26 at 21.51.11.jpeg';


import dPrizeLogo from '../assets/sliderimg/partner logos/Dprize.png';
import medaLogo from '../assets/sliderimg/partner logos/Meda.png';


import { FaSeedling, FaTools, FaChartLine, FaPeopleArrows, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const AgriInnovationPromotion = () => {
    
    const sliderImages = [
        { src: image1, title: '' },
        { src: image2, title: '' },
        { src: image3, title: '' },
        { src: image4, title: '' },
        { src: image5, title: '' },
        { src: image6, title: '' },
        { src: image7, title: '' },
        { src: image8, title: '' },
       
        { src: image10, title: '' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    
    const galleryImages = [
        image1, image2, image3, image4, image5, image6, image7, image8, image10
    ];

    
    const [showAllImages, setShowAllImages] = useState(false);

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
           
            <div className="max-w-7xl mx-auto text-center mb-16 mt-24">
                <h1 className="text-4xl font-bold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    SHFAP Field Crop Production (Eastern Province)
                </h1>
                <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s">
                    Through our partnership with various agri-based companies and stakeholders, AgriEn provides seed loans to farmers producing field crops such as soybeans and sunflowers.
                </p>

              
                <div className="w-full mb-8">
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

                <div className="max-w-7xl mx-auto mt-16 text-center">
                    <ul className="text-left text-lg text-gray-700 mb-12 animate__animated animate__fadeIn animate__delay-7s">
                        <li className="flex items-center justify-center mb-4">
                            <FaMapMarkerAlt className="text-[#46923c] text-3xl mr-4" />
                            <span><strong>Locations serviced:</strong> Sinda and Katete, Eastern Province</span>
                        </li>
                        <li className="flex items-center justify-center mb-4">
                            <FaUsers className="text-[#46923c] text-3xl mr-4" />
                            <span><strong>Reach:</strong> 300 farmers</span>
                        </li>
                    </ul>
                </div>

                <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-5s">
                    AgriEn provides certified seed loans for Soy Beans (25kg) and Sunflower (5kg) with an initial payment of 50%, the balance paid post-harvest in grain.
                </p>
                <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-6s">
                    To reduce risk of failure and enhance opportunities for improved productivity, AgriEn further provides farmers with:
                </p>
                <ul className="text-left text-lg text-gray-700 mb-12 animate__animated animate__fadeIn animate__delay-7s">
                    <li className="flex items-center mb-4">
                        <FaSeedling className="text-[#46923c] text-2xl mr-4" />
                        <span><strong>Soil Health Solutions:</strong> This includes Innoculant to enhance productivity, especially given that the target project recipients have dilapidated soils due to continuous use of poor soil health practices.</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaTools className="text-[#46923c] text-2xl mr-4" />
                        <span><strong>Extension Services:</strong> AgriEn provides technical support through extension services, including training and advisory support to help farmers adopt better farming practices, manage pests and diseases, and improve soil health.</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaChartLine className="text-[#46923c] text-2xl mr-4" />
                        <span><strong>Market Linkages:</strong> SHFAP facilitates connections between smallholder farmers and markets, ensuring that farmers can sell their produce at a fair price. AgriEn aggregates produce on behalf of the smallholder farmer.</span>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaPeopleArrows className="text-[#46923c] text-2xl mr-4" />
                        <span><strong>Community Engagement:</strong> SHFAP engages with local communities to build a supportive network for smallholder farmers, fostering collaboration and knowledge sharing among farmers and other stakeholders.</span>
                    </li>
                </ul>
            </div>

           

            
            <div className="max-w-7xl mx-auto mt-16 text-center">
                <h3 className="text-2xl font-semibold text-[#46923c] mb-4 animate__animated animate__fadeIn animate__delay-8s">
                    Our Partners
                </h3>
                <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-9s">
                    The following partners have facilitated increased reach of our services:
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                        <a href="https://www.d-prize.org/" target="_blank" rel="noopener noreferrer">
                            <img src={dPrizeLogo} alt="D-Prize Logo" className="w-32 h-32 object-contain hover:scale-110 transform transition duration-300 mb-4"/>
                        </a>
                        <p className="text-lg text-gray-700">
                            D-Prize is a grant-funded nonprofit targeting extreme poverty. D-Prize seeds social impact organizations such as AgriEn because they care about evidence-based impact, as such, they facilitate the distribution of proven solutions to challenges faced by smallholder farmers. D-Prize seeks to see existing high-impact poverty interventions made universally accessible.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mb-8 sm:mb-0">
                        <a href="https://www.meda.org/" target="_blank" rel="noopener noreferrer">
                            <img src={medaLogo} alt="MEDA Logo" className="w-32 h-32 object-contain hover:scale-110 transform transition duration-300 mb-4"/>
                        </a>
                        <p className="text-lg text-gray-700">
                            The Mennonite Economic Development Associates (MEDA) is an international economic development organization that creates business solutions to poverty. For over 70 years, MEDA has been creating business solutions to poverty that are sustainable, scalable, measurable, and replicable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgriInnovationPromotion;




