import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactComp = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg">
     
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#46923c] mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600">We'd love to hear from you! Reach out to us through any of the options below.</p>
      </motion.header>

      <div className="flex flex-col items-center md:items-start space-y-8">

        
        <motion.div
          className="mb-6 p-6 bg-gray-50 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#ffa500] mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-3 text-[#ffa500]" />
            Our Location
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            AgriEn Network. AgriEn Hub, SD 46 of 397A Chipwenupwenu Road, Makeni, Lusaka, Zambia
          </p>
        </motion.div>

       
        <motion.div
          className="mb-6 p-6 bg-gray-50 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#ffa500] mb-4 flex items-center">
            <FaPhoneAlt className="mr-3 text-[#ffa500]" />
            Call Us On
          </h2>
          <ul className="pl-6 text-gray-700 text-lg space-y-2 text-left">
            <li>+260 960 84369</li>
            <li>+260 969120337</li>
            
          </ul>
        </motion.div>

        
        <motion.div
          className="mb-6 p-6 bg-gray-50 rounded-lg shadow-xl w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#ffa500] mb-4 flex items-center">
            <FaEnvelope className="mr-3 text-[#ffa500]" />
            Email Us
          </h2>
          <p className="text-gray-700 text-xl font-medium text-left">info@agriennetwork.com</p>
        </motion.div>
      </div>

   
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg overflow-hidden shadow-xl mt-10"
      >
        <h2 className="text-4xl font-bold text-[#46923c] mb-4 text-center">Directions to AgriEn Network</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.420229003328!2d28.26890057429533!3d-15.46181221485201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f31b94dfa07b%3A0x6c61128898879d4!2sAgriEn%20Hub-%20Makeni!5e0!3m2!1sen!2szm!4v1730113118554!5m2!1sen!2szm"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default ContactComp;




