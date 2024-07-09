import React from 'react';

function Navbar() {
  return (
  <nav className="bg-navbar py-6">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold text-logo">SaasTribe</div>
    <div className="flex items-center space-x-12"> {/* Adjust space-x-12 to your desired large space */}
      <ul className="flex space-x-12">
        <li><a href="#" className="hover:text-purchase-button text-navlink">Home</a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink">Company</a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink">Account</a></li>
        <li><a href="#" className="hover:text-purchase-button text-navlink">Products</a></li>
      </ul>
      <button className="bg-purchase-button px-4 py-2 rounded text-purchase-text">Purchase Now</button>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
