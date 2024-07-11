//PageComponent.jsx
import React from 'react';
import BackgroundComponent from './BackgroundComponent';
import CardComponent from './cardComponent'; // Create CardComponent for the cards

const pageComponent = () => {
  return (
<div className="container mx-auto h-screen flex flex-col lg:flex-row">
  {/* Background Component (from previous code) */}
  <div className="lg:w-2/5  relative order-1 lg:order-1 h-full flex items-center justify-center"> 
    
    {/* Content of the first column */}
    <div className="absolute inset-0 flex flex-col top-20 items-center left-24 right-10 text-white">
      <h2 className="text-4xl font-bold z-10 relative leading-tight text-Title font-montserrat ">Ready to help you in your projects!</h2>
      <div className="z-10 relative">
        <p className=" text-xl pt-5 pb-3 font-montserrat font-medium">Our sales team will get in touch to better understand your needs , and will help you with the sign-up process</p>
        <div className="flex mt-4">
          <button className="bg-purchase-button hover:bg-blue-600 text-lg text-white font-semibold py-2 px-4 rounded font-montserrat mr-2">Start Now</button>
          <button className="bg-navbar border-2 border-contour hover:bg-green-600 text-lg text-white font-semibold font-montserrat py-2 px-4 rounded">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>
  
  {/* Second column with cards */}
  {/* Second column with cards */}
<div className="lg:w-3/5 order-2 lg:order-2 mt-7 pl-12">
<div className='  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3  gap-y-8 '>
  {/* Card 1 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/ppl.png" className=" h-8 w-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white mb-2 mt-2 font-montserrat font-semibold">Accounts</h2>
    <p className="text-sm text-p font-montserrat font-medium">Manage an unlimited number of accounts from one place</p>
  </div>
  {/* Card 2 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/Key.png" className=" h-8 w-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white font-montserrat font-semibold mt-2">Roles & Permissions</h2>
    <p className="text-sm text-p font-montserrat font-medium">Full Control with flexible user permissions for views and actions</p>
  </div>
  {/* Card 3 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/card.png" className="w-8 h-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white font-montserrat font-semibold mb-2 mt-2">Integration</h2>
    <p className="text-sm text-p font-montserrat font-medium">Connect the tools you already use</p>
  </div>
  {/* Card 4 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/bot.png" className="w-8 h-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white font-montserrat font-semibold mb-2 mt-2">Chat Bots</h2>
    <p className="text-sm text-p font-montserrat font-medium">AI powered chatbots to improve your business and customer satisfaction</p>
  </div>
  {/* Card 5 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/msg.png" className="w-8 h-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white font-montserrat font-semibold mb-2 mt-2">In-App Messaging</h2>
    <p className="text-sm text-p font-montserrat font-medium">Build a better business with proactive messages</p>
  </div>
  {/* Card 6 */}
  <div className="bg-card rounded-lg shadow-md p-4 w-48 h-52 flex flex-col justify-center">
    <img src="/img/book.png" className="w-8 h-8 object-cover rounded-t-lg mb-2 ml-4" />
    <h2 className="text-xl font-semibold text-white font-montserrat font-semibold mb-2 mt-2">Knowledge Base</h2>
    <p className="text-sm text-p font-montserrat font-medium">Create and publish answers for customers</p>
  </div>
</div>
</div>
</div>
  );
};
export default pageComponent;
// PageComponent.jsx
// import React from 'react';
// import BackgroundComponent from './BackgroundComponent';
// import CardComponent from './cardComponent'; // Create CardComponent for the cards

// const PageComponent = () => {
//   return (
//     <div className="relative">


//       <div className=" inset-0 flex justify-center items-center"> 
//         <div className="max-w-5xl w-full flex">
//           {/* Left Layout */}
//           <div className="w-1/2 p-8 bg-transparent">
//             <div className="absolute   text-white z-10">
//             <p className="text-lg text-blue-400 mb-4">Welcome to our site!</p>
//               <h1 className="text-4xl font-bold mb-4 text-black">Your Title Here</h1>
//               <p className="text-lg text-black mb-8">Your description goes here.</p>
//               <div className="flex space-x-4">
//                 <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
//                   Start Now
//                 </button>
//                 <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
//                   Contact Sales
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Layout */}
//           <div className="w-1/2 p-8 bg-transparent ">
//             <div className="grid grid-cols-3 gap-x-4 gap-y-6">
//               {/* Cards */}
//               <CardComponent title="Accounts" description="Manage an unlimited number of accounts from one place" />
//               <CardComponent title="Roles & Permissions" description="Full Control with flexible user permissions for views and actions" />
//               <CardComponent title="Integration" description="Connect the tools you already use" />
//               <CardComponent title="Chat Bots" description="AI powered chatbots to improve your business and customer satisfaction" />
//               <CardComponent title="In-App Messaging" description="Build a better business with proactive messages" />
//               <CardComponent title="Knowledge Base" description="Create and publish answers for customers" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageComponent;
//PageComponent.jsx
// import React from 'react';
// import CardComponent from './cardComponent'; // Create CardComponent for the cards

// const PageComponent = () => {
//   return (
//     <div className=" container mx-auto relative flex justify-center items-center w-full ">
//       <div className="w-full  grid gap-4 grid-cols-1 lg:grid-cols-2 ">
//         {/* Left Layout */}
//         <div className=" bg-transparent  ">
//           <div className="  text-white z-10 ">
//             <p className="text-lg text-blue-400 mb-2">Welcome</p>
//             <h1 className="text-4xl font-bold  text-Title leading-tight">Ready to help you in your projects!</h1>
//             <p className="text-lg text-white text-xl mb-6">Our sales team will get in touch to better understand your needs, and will help you with the sign-up process</p>
//             <div className="flex space-x-4">
//               <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-600">
//                 Start Now
//               </button>
//               <button className="bg-gray-700 text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-800">
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Layout */}
//         <div className=" p-8 bg-transparent  ">
//              <div className="grid grid-cols-3 gap-x-4 gap-y-6">
//                {/* Cards */}
//                <CardComponent title="Accounts" description="Manage an unlimited number of accounts from one place" image="/img/ppl.png" />
//                <CardComponent title="Roles & Permissions" description="Full Control with flexible user permissions for views and actions" image="/img/key.png" />
//                <CardComponent title="Integration" description="Connect the tools you already use" image="/img/card.png" />
//                <CardComponent title="Chat Bots" description="AI powered chatbots to improve your business and customer satisfaction" image="/img/bot.png" />
//                <CardComponent title="In-App Messaging" description="Build a better business with proactive messages" image="/img/msg.png" />
//                <CardComponent title="Knowledge Base" description="Create and publish answers for customers" image="/img/book.png" />
//              </div>
//            </div>
//       </div>
//     </div>
//   );
// };

// export default PageComponent;
