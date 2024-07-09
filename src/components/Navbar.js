import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
  <nav className="bg-navbar ">
    
  <div className="container mx-auto flex justify-between ">
  

    <div className="flex pb-2 ">
          <div className="bg-blue-500  px-8 py-2 rounded-b-3xl   flex items-center "style={{ borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }}>
            <p className="font-pacifico text-white text-logo-size">Saas</p><p className=" text-white text-logo-size">Tribe</p>
            </div>
        </div>
    <div className="flex items-center space-x-10 py-6"> {/* Adjust space-x-12 to your desired large space */}
      <ul className="flex space-x-10">
        <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-montserrat">Home</a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-montserrat">Company <FontAwesomeIcon icon={faCaretDown} /></a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-montserrat">Account <FontAwesomeIcon icon={faCaretDown} /></a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink text-xl font-montserrat">Products <FontAwesomeIcon icon={faCaretDown} /></a></li>
      </ul>
      <button className="bg-purchase-button px-4 py-2 rounded text-purchase-text font-montserrat font-bold">Purchase Now</button>
    </div>
  </div>
</nav>
//  <nav className="bg-navbar py-6">
//       <div className="container mx-auto flex justify-between ">
//         {/* Logo with half-circle */}
//         <div className="relative flex">
//           <div className="relative z-10 text-2xl font-bold text-logo">SaasTribe</div>
//           <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
//             <div className="w-16 h-8 bg-blue-500 rounded-b-full"></div>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-12">
//           <ul className="flex space-x-12">
//             <li><a href="#" className="hover:text-purchase-button text-navlink">Home</a></li>
//             <li><a href="#" className="hover:text-purchase-button text-navlink">Company</a></li>
//             <li><a href="#" className="hover:text-purchase-button text-navlink">Account</a></li>
//             <li><a href="#" className="hover:text-purchase-button text-navlink">Products</a></li>
//           </ul>
//           <button className="bg-purchase-button px-4 py-2 rounded text-purchase-text">Purchase Now</button>
//         </div>
//       </div>
//     </nav> 

  );
}

export default Navbar;
