import React from 'react';

const BackgroundComponent = () => {
  return (
<div className="container mx-auto lg:bg-navbar bg-navbar lg:h-screen h-screen flex flex-col lg:flex-row">
  <div className="lg:w-2/5  relative order-1 lg:order-1 h-full flex "> {/* First column, takes 2/5 width on large screens */}
    <div className="absolute inset-0 bg-purchase-button rounded-bl-full top-10 lg:top-20 h-28"></div> {/* Adjusted top value to top-20 */}
  </div>
  <div className="lg:w-3/5  relative order-2 lg:order-2 h-full lg:mt-0 mt-56 flex items-center justify-center  "> {/* Second column, takes 3/5 width on large screens */}
    <div className="absolute inset-0 lg:top-20 sm:top-20 top-6 rounded-tr-full bg-purchase-button h-28"></div>
    <div className="absolute inset-x-0 lg:top-76 top-80   rounded-bl-full rounded-br-full bg-purchase-button h-28"></div> {/* Adjusted spacing with top-56 */}
  </div>
  
</div>


  );
};

export default BackgroundComponent;

// import React from 'react';

// const BackgroundComponent = () => {
//   return (
//     <div className=" container mx-auto flex flex-col w-full h-80 bg-navbar justify-start gap-24 ">
//       {/* Long rectangle */}
//       <div className="flex h-20 mt-9"> 
//         <div className="w-full bg-purchase-button rounded-bl-full rounded-tr-full"></div>
//       </div>

//       {/* Short rectangle */}
//       <div className="flex justify-end h-20">
//         <div className="w-2/3 md:w-3/5 bg-purchase-button rounded-bl-full rounded-br-full"></div>
//       </div>
//     </div>
//   );
// };

// export default BackgroundComponent;
