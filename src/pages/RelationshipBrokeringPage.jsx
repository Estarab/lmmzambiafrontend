import React from 'react';


import galleryImage1 from '../assets/services/Relationship brokering.jpg'; 
import galleryImage2 from '../assets/services/Input Access facilitation.jpg';
import galleryImage3 from '../assets/services/Investment Faciliation.jpg';
import galleryImage4 from '../assets/services/Market Faciliation.jpg';

const AgriInnovationPromotion = () => {
    const images = [
        { src: galleryImage1, title: 'Relationship Brokering' },
        { src: galleryImage2, title: 'Input Access Facilitation' },
        { src: galleryImage3, title: 'Investment Facilitation' },
        { src: galleryImage4, title: 'Market Facilitation' },
    ];

    return (
        <div className='bg-slate-100 mt-24'>
           
            <div className="container mx-auto p-6">
                {/* Main Title */}
                <h1 className="text-4xl font-bold text-center text-[#46923c] mb-6">
                    Relationship Brokering & Stakeholder Engagement Facilitation
                </h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Neutral conveyor for Project Kick Off, Consultative meetings, Project Review Meetings, Policy dialogue and advocacy sessions etc.
                </p>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-72 sm:h-96 object-cover" 
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-[#46923c] text-center">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Section */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                    <h2 className="text-3xl font-semibold text-[#46923c] mb-4 text-center">Our Role</h2>
                    <p className="text-lg text-gray-700 mb-4 text-center">
                        At AgriEn Network, we specialize in fostering strong relationships among stakeholders. Our team serves as a neutral facilitator for various engagements, including project kick-offs, consultative meetings, and policy dialogues.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 text-center">
                        We ensure that all parties involved have a platform for meaningful engagement, paving the way for better collaboration and decision-making in the agriculture sector.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AgriInnovationPromotion;



