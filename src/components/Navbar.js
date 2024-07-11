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
          <button className="bg-purchase-button px-4 py-2 rounded-xl text-purchase-text font-montserrat font-bold text-lg lg:text-xl mt-4 lg:mt-0">Purchase Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


{/* <div className="flex justify-between p-8">

<div className="w-5/12">
  <h1 className="text-2xl font-bold mb-4">Title</h1>
  <p className="mb-4">This is the description for the first section. It provides an overview or additional information.</p>
  <div className="flex space-x-4">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Button 2</button>
  </div>
</div>


<div className="w-7/12 relative p-12">
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 h-16 w-3/4"></div>
  <div className="grid grid-cols-3 gap-2 relative z-10 justify-around">
    {[
      {
        title: "Accounts",
        description: "Manage an unlimited number of accounts from one place."
      },
      {
        title: "Roles and Permissions",
        description: "Full control with flexible user permissions for views and actions."
      },
      {
        title: "Integration",
        description: "Connect the tools you already use."
      },
      {
        title: "Chat Bots",
        description: "AI-powered chatbots to improve your business and customer satisfaction."
      },
      {
        title: "In-App Messaging",
        description: "Build a better business with provocative messages."
      },
      {
        title: "Knowledge Base",
        description: "Create and publish answers for customers."
      }
    ].map((card, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 w-40">
        <h2 className="text-lg font-bold mb-2">{card.title}</h2>
        <p className="text-sm">{card.description}</p>
      </div>
    ))}
  </div>
</div>
</div> */}
