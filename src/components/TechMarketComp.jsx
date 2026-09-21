import React, { useEffect, useState } from 'react';
import { FaMapMarkedAlt, FaUsers, FaIndustry, FaSeedling, FaHandsHelping, FaRegMoneyBillAlt, FaChartLine } from 'react-icons/fa';

const TechMarketComp = () => {
    const [farmerCounts, setFarmerCounts] = useState({
        eastern: 0,
        central: 0,
        southern: 0,
        northWestern: 0,
        muchinga: 0,
        luapula: 0,
        northern: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setFarmerCounts((prevCounts) => {
                const newCounts = { ...prevCounts };
                if (newCounts.eastern < 997) newCounts.eastern++;
                if (newCounts.central < 1739) newCounts.central++;
                if (newCounts.southern < 6242) newCounts.southern++;
                if (newCounts.northWestern < 4209) newCounts.northWestern++;
                if (newCounts.muchinga < 1316) newCounts.muchinga++;
                if (newCounts.luapula < 2021) newCounts.luapula++;
                if (newCounts.northern < 3619) newCounts.northern++;
                return newCounts;
            });
        },10); 
        
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 mt-24">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    SHFAP Technology and Market Access (World Vision under Thrive)
                </h1>
                <p className="text-xl text-black mb-6 animate__animated animate__fadeIn animate__delay-2s">
                    AgriEn works with World Vision to promote technology adoption and enhance market access.
                </p>
            </div>

            {/* Locations and Reach Section */}
            <div className="mb-16 animate__animated animate__fadeIn animate__delay-3s">
                <div className="text-center text-[#46923c] mb-8">
                    <h2 className="text-3xl font-semibold">Farmer Reach</h2>
                    <p className="text-xl text-black">Our work is with an estimate of reaching 23,400 beneficiaries across 468 Community Producer Groups accessing climate-smart technologies for improved productivity and sustainable markets by 2030.</p>
                </div>

                {/* Farmer Reach Table */}
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full table-auto text-white">
                        <thead className="bg-[#46923c]">
                            <tr>
                                <th className="py-3 px-4 text-2xl font-semibold">Province</th>
                                <th className="py-3 px-4 text-2xl font-semibold">Number of Farmers to Impact</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-800">
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Eastern Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.eastern}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Central Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.central}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Southern Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.southern}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    North-western Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.northWestern}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Muchinga Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.muchinga}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Luapula Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.luapula}</span>
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-4 px-4 font-semibold flex items-center text-xl">
                                    <FaMapMarkedAlt className="text-[#46923c] text-2xl mr-3" />
                                    Northern Province
                                </td>
                                <td className="py-4 px-4 text-center text-[#46923c] text-2xl">
                                    <span>{farmerCounts.northern}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Interventions */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-semibold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-4s">
                    Our Key Interventions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <FaIndustry className="text-[#46923c] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#46923c]">Technology Gap Assessment</h3>
                        <p className="text-gray-700 mt-2 text-lg">
                            Carry out periodical technology gap assessments and investment opportunities that exist among smallholder farmers in the programme areas.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <FaSeedling className="text-[#46923c] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#46923c]">Promote Technology Adoption</h3>
                        <p className="text-gray-700 mt-2 text-lg">
                            To create awareness and promote positive attitudes and perceptions towards sustainable technology adoption.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <FaHandsHelping className="text-[#46923c] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#46923c]">Empowering Innovators</h3>
                        <p className="text-gray-700 mt-2 text-lg">
                            Empowering innovators to influence adoption and utilization as change agents.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <FaChartLine className="text-[#46923c] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#46923c]">Market Linkages</h3>
                        <p className="text-gray-700 mt-2 text-lg">
                            Enhance market linkages for goats, tomatoes, dairy, beans, groundnuts, chicken, rice, and onions.
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                        <FaChartLine className="text-[#46923c] text-5xl mb-4" />
                        <h3 className="text-xl font-semibold text-[#46923c]">Access to Technology</h3>
                        <p className="text-gray-700 mt-2 text-lg">
                        Enhance access to technology information among farmers
                        </p>
                    </div>
                </div>
            </div>

            {/* Financial Linkages */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-semibold text-[#46923c] mb-6 animate__animated animate__fadeIn animate__delay-5s">
                    Financial Linkages for Producers
                </h2>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 mx-auto max-w-lg">
                    <FaRegMoneyBillAlt className="text-[#46923c] text-5xl mb-4" />
                    <h3 className="text-xl font-semibold text-[#46923c]">Grants and Soft Loans</h3>
                    <p className="text-gray-700 mt-2 text-lg">
                        Enhance financial linkages in the form of grants and soft loans for the Commercial Producer Groups from government and other agro-financial institutions.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TechMarketComp;




