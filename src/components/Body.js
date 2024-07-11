import React from 'react';

function Body() {
  return (
    <div className="bg-gray-900 text-white p-10">
      {/* Welcome Section */}
      <div className="relative mb-10">
        
        <div className="ml-20 mt-10">
        <div className=" top-0 bg-blue-500 rounded-full transform ">
          <h1 className="text-3xl mb-4 font-bold">Ready to help you in your projects!</h1>
          </div>
          <p className="mb-4 text-lg">Our sales team will get in touch to better understand your needs, and will help you with the sign-up process</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4 font-semibold">Start Now</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded font-semibold">Contact Sales</button>
          <div className="absolute -bottom-4 left-20 w-32 h-10 bg-blue-500 rounded-full transform -translate-x-1/2"></div> {/* Second Blue Shape */}
        </div>
      </div>

    </div>
  );
}

export default Body;
