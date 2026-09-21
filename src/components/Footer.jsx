import React, { useState } from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { FaPhone, FaBuilding, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import axios from 'axios'; 
import { SiX } from 'react-icons/si'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.status === 200) {
        setMessage('Subscription successful! Check your email for confirmation.');
        setEmail('');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-8 bg-gradient-to-r from-[#46923c] to-[#46923c] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-6">Stay updated with our activities and opportunities.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow p-3 rounded-md text-gray-800 mb-4 sm:mb-0 sm:mr-4"
              required
            />
            <Button
              type="submit"
              className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-[#ffa500] hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
            >
              Subscribe
            </Button>
          </form>
          {message && <p className="mt-2 text-green-400">{message}</p>}
        </div>

       
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <FaBuilding className="inline-block text-[#ffa500] mr-2" /> Head Office
          </h2>
          <p className="mb-2">
            <strong></strong> AgriEn Network. AgriEn Hub, SD 46 of 397A Chipwenupwenu Road, Makeni, Lusaka, Zambia
          </p>
          <p className="mb-2">
            <strong></strong> <FaEnvelope className="inline-block text-[#ffa500] mr-1" /> info@agriennetwork.com
          </p>
          <p className="mb-2">
            <strong></strong> <FaPhone className="inline-block text-[#ffa500] mr-1" /> +260 960 84369
          </p>
          <p className="mb-2">
            <FaPhone className="inline-block text-[#ffa500] mr-1" /> +260 969120337
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="about" className="hover:text-blue-400 transition duration-300">About AgriEn</Link>
            </li>
            <li className="mb-2">
              <Link to="services" className="hover:text-blue-400 transition duration-300">Our Services</Link>
            </li>
            <li className="mb-2">
              <Link to="programs" className="hover:text-blue-400 transition duration-300">Our Programs</Link>
            </li>
            <li className="mb-2">
              <Link to="co-working-space" className="hover:text-blue-400 transition duration-300">Co-Working Space</Link>
            </li>
            <li className="mb-2">
              <Link to="contact" className="hover:text-blue-400 transition duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#ffa500]">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/AgriEnNetwork?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <BsFacebook className="text-3xl text-white hover:text-white transition duration-300" />
          </a>
          
          <a href="https://x.com/AgriEn_Network" target="_blank" rel="noopener noreferrer">
            <SiX className="text-3xl text-white hover:text-white transition duration-300" />
          </a>
        </div>
      </div>

     
      <div className="mt-12 text-center border-t border-gray-700 pt-8">
        <p>&copy; 2024 AgriEn. All rights reserved. Developed by AB Nation Tech</p>
      </div>
    </footer>
  );
};

export default Footer;







