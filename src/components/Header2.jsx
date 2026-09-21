import React, { useState } from 'react'; 
import { Avatar, Button, Dropdown } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import logo from '../assets/lmmlogo.png';

const Header2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGroup1Open, setIsGroup1Open] = useState(false);
  const [isGroup2Open, setIsGroup2Open] = useState(false);
  const [isGroup3Open, setIsGroup3Open] = useState(false);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSignInClick = () => {
    setIsMenuOpen(false);
    navigate('/sign-in');
  };

  const closeMenu = () => setIsMenuOpen(false);

  const toggleGroup = (group) => {
    if (group === 1) setIsGroup1Open(!isGroup1Open);
    if (group === 2) setIsGroup2Open(!isGroup2Open);
    if (group === 3) setIsGroup3Open(!isGroup3Open);
  };

  return (
    <header className="bg-slate-100 text-white shadow-md py-4 opacity-100">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </a>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {/* About Us Dropdown */}
          {/* <div className="group relative">
            <a href="/about" className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white">A</a>
          </div> */}

          {/* Services Dropdown */}
          {/* <div className="group relative">
            <button className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white flex items-center">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 hidden space-y-2 bg-white text-black group-hover:block w-48 py-2 rounded-lg shadow-lg z-50">
              <a href="/relationship-brokering" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Relationship Brokering</a>
              <a href="/investment-facilitation" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Investment Facilitation</a>
              <a href="/information-management" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Information and Knowledge Management</a>
              <a href="/agr-tourism" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Agri Innovation Promotion</a>
            </div>
          </div> */}

          {/* Programs Dropdown */}
          {/* <div className="group relative">
            <button className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white flex items-center">
              Our Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 hidden space-y-0 bg-white text-black group-hover:block w-80 py-2 rounded-lg shadow-lg z-50">
              <p className="block px-4 text-[#46923c] text-xs font-bold">Small Holder Farmer Acceleration Programme</p>
              <div className='ml-2'>
                <a href="/shfap-overview" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Over View</a>
                <a href="/field-crop" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Field Crop Production (Eastern Province)</a>
                <a href="/market" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Technology and Market Access (World Vision)</a>
                <a href="/mushroom" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold">Mushroom Value Chain</a>
              </div>
              <a href="/sku2farm" className="block px-4 py-2 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-bold">Sku 2 Farm</a>
            </div>
          </div> */}

          {/* AgriEn Hub Dropdown */}
          {/* <div className="group relative">
            <button className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white flex items-center">
              AgriEn Hub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 hidden space-y-2 bg-white text-black group-hover:block w-32 py-2 rounded-lg shadow-lg z-50">
              <a href="/co-working-space" className="block px-2 py-1 text-[#46923c] hover:bg-[#46923c] hover:text-white text-xs font-semibold"> Co-Working Space</a>
            </div>
          </div> */}

          {/* Blog Link */}
          {/* <div className="group relative">
            <a href="/search" className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white">Blog</a>
          </div> */}

          {/* Contact Us Link */}
          {/* <div className="group relative">
            <a href="/contact" className="text-[#46923c] text-sm font-semibold p-1 hover:bg-[#46923c] hover:text-white">Contact Us</a>
          </div> */}
        </nav>

         {/* Mobile Menu Button */}
        {/* <div className="md:hidden flex items-center">
           <button 
             className="text-[#46923c]" 
             onClick={() => setIsMenuOpen(!isMenuOpen)} 
             aria-label="Toggle Menu"
           >
             {isMenuOpen ? (
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               </svg>
             ) : (
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
             )}
           </button>
         </div> */}




        {/* User Authentication (Mobile & Desktop) */}
        <div className="flex items-center ml-4">
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" img={currentUser.profilePicture} rounded className="h-10 w-10" />}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">{currentUser.email}</span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <button
              className="bg-[#061a4f] text-white text-xs py-1 px-3 rounded-md border border-[#46923c] hover:bg-[#46923c] hover:text-white focus:ring-2 focus:ring-[#46923c] transition-all duration-300"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          )}
        </div>

    

      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#46923c] text-white px-4 py-4 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'scale-100' : 'scale-95'} `}
      >
        <nav className="space-y-2 text-sm">
        {/* <div className="space-y-2">
              <a href="/about" className="block text-white hover:text-[#46923c] p-1 hover:bg-white text-sm font-semibold" onClick={closeMenu}>About AgriEn</a>
            </div> */}

          {/* Group 1 */}
          {/* <button onClick={() => toggleGroup(1)} className="block hover:text-[#ffa500] p-1 font-semibold flex items-center">
            Our Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 w-4 h-4 transform ${isGroup1Open ? 'rotate-180' : ''} transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button> */}
          {/* {isGroup1Open && (
            <div className="space-y-2 pl-2">
              <a href="/relationship-brokering" className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Relationship Brokering</a>
              <a href="/investment-facilitation" className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Investment Facilitation</a>
              <a href="/information-management" className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Information and Knowledge Management</a>
              <a href="/agr-tourism" className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Agri Innovation Promotion</a>
            </div>
          )} */}

          {/* Group 2 */}
          {/* <button onClick={() => toggleGroup(2)} className="block hover:text-[#ffa500] p-1 font-semibold flex items-center">
            Our Programs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 w-4 h-4 transform ${isGroup2Open ? 'rotate-180' : ''} transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isGroup2Open && (
            <div className="space-y-2 pl-2">
              <p className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Small Holder Farmer Acceleration Programme</p>
              <a href="/shfap-overview" className="block hover:text-[#46923c] p-1 pl-4 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Over View</a>
              <a href="/field-crop" className="block hover:text-[#46923c] p-1 pl-4 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Field Crop Production (Eastern Province)</a>
              <a href="/market" className="block hover:text-[#46923c] p-1 pl-4 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Technology and Market Access (World Vision)</a>
              <a href="/mushroom" className="block hover:text-[#46923c] p-1 pl-4 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Mushroom Value Chain</a>
              <a href="/sku2farm" className="block hover:text-[#46923c] p-1  hover:bg-white text-xs font-semibold" onClick={closeMenu}>Sku 2 Farm</a>
            </div>
          )} */}

          {/* Group 3 */}
          {/* <button onClick={() => toggleGroup(3)} className="block hover:text-[#ffa500] p-1 font-semibold flex items-center">
            AgriEn Hub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 w-4 h-4 transform ${isGroup3Open ? 'rotate-180' : ''} transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isGroup3Open && (
            <div className="space-y-2 pl-6">
              <a href="/co-working-space" className="block hover:text-[#46923c] p-1 hover:bg-white text-xs font-semibold" onClick={closeMenu}>Co-Working Space</a>
            </div>
          )} */}

            {/* <div className="space-y-2">
              <a href="/search" className="block text-white hover:text-[#46923c] p-1 hover:bg-white text-sm font-semibold" onClick={closeMenu}>Blog</a>
            </div>
            <div className="space-y-2">
              <a href="/contact" className="block text-white hover:text-[#46923c] p-1 hover:bg-white text-sm font-semibold" onClick={closeMenu}>Contact Us</a>
            </div> */}


        </nav>
      </div>
    </header>
  );
};

export default Header2;




