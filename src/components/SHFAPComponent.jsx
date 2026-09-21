import { motion } from 'framer-motion';
import { FaSeedling, FaHandsHelping, /*FaMarket,*/ FaChalkboardTeacher } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdCheckmarkCircle } from 'react-icons/io';

export default function SHFAPComponent() {
  return (
    <div className="py-12 bg-[#f3f4f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-[#46923c] mb-4">Smallholder Farmer Acceleration Program (SHFAP)</h1>
          <p className="text-lg text-gray-700">Empowering smallholder farmers in Zambia to enhance productivity, improve livelihoods, and achieve food security.</p>
        </motion.div>

        {/* Objective Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaSeedling className="text-6xl text-[#46923c] mb-4" />
            <h3 className="text-2xl font-semibold text-[#46923c]">Programme Objective</h3>
            <p className="text-gray-700 mt-4 text-center">
              SHFAP aims to improve smallholder farmers' productivity and livelihoods by supporting access to certified inputs, extension services, market linkages, and capacity building.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <BsFillPeopleFill className="text-6xl text-[#46923c] mb-4" />
            <h3 className="text-2xl font-semibold text-[#46923c]">Target</h3>
            <p className="text-gray-700 mt-4 text-center">
              The program focuses on smallholder farmers in Zambia’s rural and underserved communities, empowering them to boost food security and income.
            </p>
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaHandsHelping className="text-6xl text-[#46923c] mb-4" />
            <h3 className="text-xl font-semibold text-[#46923c]">Certified Input Provision</h3>
            <p className="text-gray-700 mt-4 text-center">
              Provides high-quality seeds and fertilizers to enhance productivity.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <FaChalkboardTeacher className="text-6xl text-[#46923c] mb-4" />
            <h3 className="text-xl font-semibold text-[#46923c]">Extension Services</h3>
            <p className="text-gray-700 mt-4 text-center">
              Offers training in sustainable farming practices and pest management.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            {/* <FaMarket className="text-6xl text-[#46923c] mb-4" /> */}
            <h3 className="text-xl font-semibold text-[#46923c]">Market Linkages</h3>
            <p className="text-gray-700 mt-4 text-center">
              Connects farmers to fair markets and reliable buyers.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <IoMdCheckmarkCircle className="text-6xl text-[#46923c] mb-4" />
            <h3 className="text-xl font-semibold text-[#46923c]">Capacity Building</h3>
            <p className="text-gray-700 mt-4 text-center">
              Builds business skills and financial literacy for resilience.
            </p>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <h3 className="text-2xl font-semibold text-[#46923c] mb-4">Partners</h3>
          <div className="flex justify-center gap-10">
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>Good Nature</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>MEDA</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>D-Prize</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          className="bg-[#e9f5e5] rounded-lg p-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#46923c] mb-4">Highlights</h3>
          <p className="text-lg text-gray-700">
            Since 2021, SHFAP has reached 300+ soybean farmers in Sinda District, improving their access to inputs, production practices, and market connections.
          </p>
        </motion.div>

        {/* Program Overview */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-3xl font-bold text-[#46923c] mb-6">Other Programs</h2>
          <div className="flex justify-center gap-12">
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>🌾 Field Crop Production (Eastern Province)</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>💻 Technology and Market Access (World Vision under Thrive)</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-lg font-medium text-gray-700">
              <p>🍄 Mushroom Value Chain</p>
            </motion.div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
