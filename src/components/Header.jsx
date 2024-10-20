import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext'; // Assuming you already have this
import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      {/* Contact Section */}
      <div className="bg-[#d61f23] py-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left space-y-2 sm:space-y-0">
      {/* Address */}
      <div className="flex items-center space-x-2">
        <i className="fas fa-map-marker-alt text-white"></i>
        <span className="text-sm text-white">Eltastraße 2, 78573 Wurmlingen, Germany</span>
      </div>
      {/* Email */}
      <div className="flex items-center space-x-2">
        <i className="fas fa-envelope text-white"></i>
        <a href="mailto:info@mcm-export.de" className="text-sm text-white hover:underline">
          info@mcm-export.de
        </a>
      </div>
      {/* Phone */}
      <div className="flex items-center space-x-2">
        <i className="fas fa-phone-alt text-white"></i>
        <a href="tel:+4974619145600" className="text-sm text-white hover:underline">
          +49 7461 9145600
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Navbar Section */}
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Navbar */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="./icon-mcm.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Responsive Toggle Button */}
          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            onClick={toggleNav}
          >
            <svg
              className={`${isNavVisible ? 'hidden' : 'block'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`${isNavVisible ? 'block' : 'hidden'} w-6 h-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              {language === 'en' ? 'Home' : 'Startseite'}
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              {language === 'en' ? 'About' : 'Über uns'}
            </Link>
            <Link
              to="/team"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              {language === 'en' ? 'Team' : 'Team'}
            </Link>
            <Link
              to="/products"
              className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
            >
              {language === 'en' ? 'Products' : 'Produkte'}
            </Link>
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md lg:inline-flex"
            style={{ backgroundColor: '#d61f23' }} // Set the red color
          >
            {language === 'en' ? 'Deutsch' : 'English'}
          </button>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`${
            isNavVisible ? 'block' : 'hidden'
          } pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden`}
        >
          <div className="flex flex-col px-6 space-y-1">
            <Link
              to="/"
              className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
              onClick={toggleNav}
            >
              {language === 'en' ? 'Home' : 'Startseite'}
            </Link>
            <Link
              to="/about"
              className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
              onClick={toggleNav}
            >
              {language === 'en' ? 'About' : 'Über uns'}
            </Link>
            <Link
              to="/team"
              className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
              onClick={toggleNav}
            >
              {language === 'en' ? 'Team' : 'Team'}
            </Link>
            <Link
              to="/products"
              className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600"
              onClick={toggleNav}
            >
              {language === 'en' ? 'Products' : 'Produkte'}
            </Link>
          </div>
          <button
            onClick={toggleLanguage}
            className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 rounded-md"
            style={{ backgroundColor: '#d61f23' }} // Set the red color
          >
            {language === 'en' ? 'Deutsch' : 'English'}
          </button>
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;

