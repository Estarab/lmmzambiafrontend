import React from 'react';
import { FaSeedling, FaLaptopHouse, FaMoneyBillWave, FaUsers,FaArrowRight, FaPhone, FaCube } from 'react-icons/fa'; 
// import { ArrowRightIcon, DevicePhoneIcon, CubeIcon } from '@heroicons/react/outline';

const SHFAPOverviewComp = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-24">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Smallholder Farmer Acceleration Program (SHFAP)
                </h1>
                <p className="text-lg text-gray-700 mb-12 animate__animated animate__fadeIn animate__delay-2s">
                    SHFAP aims to improve smallholder farmers' productivity and livelihoods by supporting access to certified inputs, extension services, market linkages, and capacity building.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Certified Input Provision */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-[#46923c] text-4xl mb-4">
                            <FaSeedling />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Certified Input Provision</h3>
                        <p className="text-gray-700">
                            We provide high-quality seeds and fertilizers to enhance productivity, ensuring farmers have access to the best resources.
                        </p>
                    </div>

                    {/* Extension Services */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-[#46923c] text-4xl mb-4">
                            <FaLaptopHouse />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Extension Services</h3>
                        <p className="text-gray-700">
                            We offer training in sustainable farming practices and pest management, empowering farmers with the skills they need to succeed.
                        </p>
                    </div>

                    {/* Market Linkages */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-[#46923c] text-4xl mb-4">
                            <FaMoneyBillWave />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Market Linkages</h3>
                        <p className="text-gray-700">
                            We connect farmers to fair markets and reliable buyers, ensuring that their produce reaches the right people.
                        </p>
                    </div>

                    {/* Capacity Building */}
                    <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-[#46923c] text-4xl mb-4">
                            <FaUsers />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">Capacity Building</h3>
                        <p className="text-gray-700">
                            We build business skills and financial literacy for farmers, equipping them with the tools for long-term resilience.
                        </p>
                    </div>
                </div>

                {/* AgriEn Delivery Trajectories */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-3s">
                        AgriEn is Delivering the Program Under These Trajectories
                    </h2>

                    {/* <ul className="space-y-4 text-lg text-[#46923c]  list-inside animate__animated animate__fadeIn animate__delay-4s">
                       <a href="/field-crop"><li>Field Crop Production (Eastern Province)</li></a> 
                        <a href="/market"><li>Technology and Market Access (World Vision under Thrive 2030)</li></a>
                        <a href="/mushroom"><li>Mushroom Value Chain</li></a>
                    </ul> */}
                    
                    <div className="flex justify-center items-center ">
                   <ul className="space-y-4 items-center  text-lg text-[#46923c] list-inside animate__animated animate__fadeIn animate__delay-4s">
    <a href="/field-crop" className="flex items-center space-x-2 hover:underline hover:text-[#2d7f26] transition duration-300">
        <FaArrowRight className="h-5 w-5" />
        <li>Field Crop Production (Eastern Province)</li>
    </a> 
    <a href="/market" className="flex items-center space-x-2 hover:underline hover:text-[#2d7f26] transition duration-300">
        <FaPhone className="h-5 w-5" />
        <li>Technology and Market Access (World Vision under Thrive 2030)</li>
    </a>
    <a href="/mushroom" className="flex items-center space-x-2 hover:underline hover:text-[#2d7f26] transition duration-300">
        <FaCube className="h-5 w-5" />
        <li>Mushroom Value Chain</li>
    </a>
</ul>
</div>

                </div>
            </div>
        </div>
    );
}

export default SHFAPOverviewComp;