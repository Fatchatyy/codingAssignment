import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navbar">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="flex pb-2">
          <div className="bg-blue-500 px-8 py-2 flex items-center" style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
            <p className="font-pacifico text-white text-logo-size">Saas</p>
            <p className="font-medium font-poppins text-white text-logo-size">Tribe</p>
          </div>
        </div>
        {/* Menu for large screens */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10">
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Home</a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Company <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Account <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Products <FontAwesomeIcon icon={faCaretDown} /></a></li>
          </ul>
          <button className="bg-purchase-button px-4 py-2 rounded-xl text-purchase-text font-montserrat font-bold">Purchase Now</button>
        </div>
        {/* Menu button for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Home</a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Company <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Account <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-semibold font-montserrat">Products <FontAwesomeIcon icon={faCaretDown} /></a></li>
          </ul>
          <button className="bg-purchase-button px-4 py-2 rounded-xl text-purchase-text font-montserrat font-bold">Purchase Now</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
