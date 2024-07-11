import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navbar">
      <div className="container mx-auto flex justify-between items-center py-4 lg:py-6">
        <div className="flex items-center">
          <div className={`bg-blue-500 px-8 py-2 flex items-center rounded-full ${isOpen ? 'hidden' : 'block'}`}>
            <p className="font-pacifico text-white text-lg lg:text-xl">Saas</p>
            <p className="text-white text-lg lg:text-xl">Tribe</p>
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white text-xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        <div className={`flex-col lg:flex lg:flex-row lg:items-center lg:space-x-10 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            <li><a href="#" className="hover:text-purchase-button text-navlink text-lg lg:text-xl font-montserrat">Home</a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-lg lg:text-xl font-montserrat">Company <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-lg lg:text-xl font-montserrat">Account <FontAwesomeIcon icon={faCaretDown} /></a></li>
            <li><a href="#" className="hover:text-purchase-button text-navlink text-lg lg:text-xl font-montserrat">Products <FontAwesomeIcon icon={faCaretDown} /></a></li>
          </ul>
          <button className="bg-purchase-button hover:bg-blue-600 px-4 py-2 rounded-xl text-purchase-text font-montserrat font-bold text-lg lg:text-xl mt-4 lg:mt-0">Purchase Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


