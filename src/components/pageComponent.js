import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faLock ,faMicrochip, faRobot,faEnvelope,faBook} from '@fortawesome/free-solid-svg-icons';




const pageComponent = () => {
  return (
<div className="container mx-auto h-screen flex flex-col  lg:flex-row">
  <div className="lg:w-2/5  relative order-1 lg:order-1 h-full flex "> 
    
    {/* Content of the first column */}
    <p className="text-lg text-welcome ml-20 pl-2 lg:mt-12 mt-3  ">Welcome </p>
    <div className="absolute inset-0 flex flex-col lg:top-20 top-10  left-20 text-white ">
   
      <h2 className="font-bold z-10 relative leading-tight text-Title font-montserrat ">Ready to help you in your projects!</h2>
      <div className="z-10 relative">
        <p className=" text-xl pt-5 pb-3 font-montserrat font-medium">
          Our sales team will get in touch to better understand your needs , and will help you with the sign-up process
        </p>
        <div className="flex mt-4 ">
          <button className="bg-purchase-button hover:bg-blue-600 text-lg text-white font-semibold py-2 px-4 rounded-xl w-40  font-montserrat mr-2">
            Start Now
          </button>
          <button className="bg-navbar border-2 border-contour hover:bg-green-600 text-lg text-white font-semibold  font-montserrat py-2 px-4 rounded-xl">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </div>
  

  {/* Second column with cards */}
<div className="lg:w-3/5 order-2 lg:order-2 lg:mt-7 mt-96  lg:pl-20 lg:pr-12 pl-9 pr-9">
<div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:gap-y-8 gap-y-8 gap-x-2   '>
  <div className="bg-card rounded-lg shadow-xl p-4 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end ">
    <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center">
    <FontAwesomeIcon icon={faUsers} className="text-2xl text-[#377dff]" />
      </div>
    <h2 className="text-base  text-white  font-montserrat font-semibold mt-7">Accounts</h2>
    <p className="text-xs text-p font-montserrat font-medium mt-3 mb-2">Manage an unlimited number of accounts from one place</p>
  </div>
  <div className="bg-card rounded-lg shadow-xl p-3 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end">
   
    <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center">
    <FontAwesomeIcon icon={faLock} className="text-2xl text-[#377dff]"  />
      </div>
    <h2 className="text-base text-white font-montserrat font-semibold lg:mt-7 mt-1">Roles & Permissions</h2>
    <p className="text-xs text-p font-montserrat font-medium mt-3 mb-3">Full Control with flexible user permissions for views and actions</p>
  </div>
  <div className="bg-card rounded-lg shadow-xl p-3 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end">
  <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center lg:mb-1">
  <FontAwesomeIcon icon={faMicrochip} className="text-2xl text-[#377dff]"  />
      </div>
    <h2 className="text-base text-white font-montserrat font-semibold lg:pt-1 lg:mt-4 mt-5 pt-2 pb-1 ">Integration</h2>
    <p className="text-xs text-p font-montserrat font-medium lg:mt-2 lg:mb-8 mt-2 mb-12">Connect the tools you already use</p>
  </div>
  <div className="bg-card rounded-lg shadow-xl p-3 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end">
   
    <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center">

  <FontAwesomeIcon icon={faRobot} className="text-2xl text-[#377dff]"  />
  
      </div>
    <h2 className="text-base text-white font-montserrat font-semibold  mt-7">Chat Bots</h2>
    <p className="text-xs text-p font-montserrat font-medium mt-4 mb-1">AI powered chatbots to improve your business and customer satisfaction</p>
  </div>
  <div className="bg-card rounded-lg shadow-xl p-3 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end">
    
    <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center">
  <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-[#377dff]" />
      </div>
    <h2 className="text-base text-white font-montserrat font-semibold  lg:mt-7 mt-1">In-App Messaging</h2>
    <p className="text-xs text-p font-montserrat font-medium lg:mt-4 lg:mb-6 mb-10 mt-4">Build a better business with proactive messages</p>
  </div>
  <div className="bg-card rounded-lg shadow-xl p-3 lg:w-48 lg:h-56 w-30 h-30 flex flex-col justify-end">
    
    <div className="    w-16 h-16 bg-icon rounded-full flex items-center justify-center">
     
      <FontAwesomeIcon icon={faBook} className="text-2xl text-[#377dff]"  />
      </div>
    <h2 className="text-base text-white font-montserrat font-semibold  lg:mt-7 mt-1">Knowledge Base</h2>
    <p className="text-xs text-p font-montserrat font-medium lg:mt-4 lg:mb-6 mb-10 mt-4">Create and publish answers for customers</p>
  </div>
</div>
</div>
</div>
  );
};
export default pageComponent;
