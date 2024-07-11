import React from 'react';
import Navbar from './Navbar';
import BackgroundComponent from './BackgroundComponent';

import PageComponent from './pageComponent';
const BackgroundAndPage = () => {
  return (

<div >
   <Navbar/>
    <div className=" relative  mt-9 ">
    {/* Background Component */}
  <BackgroundComponent/>

    {/* Page Component */}
    <div className="absolute inset-0 flex justify-center items-center">
      <PageComponent />
    </div>
  </div>
     </div>

  );
};
export default BackgroundAndPage;