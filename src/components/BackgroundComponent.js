import React from 'react';

const BackgroundComponent = () => {
    return (
        <div className="container mx-auto lg:bg-navbar bg-navbar lg:h-screen h-screen flex flex-col lg:flex-row">
            <div className="lg:w-2/5  relative order-1 lg:order-1 h-full flex "> 
                <div className="absolute inset-0 bg-purchase-button rounded-bl-full top-10 lg:top-20 h-28"></div> 
            </div>
            <div className="lg:w-3/5  relative order-2 lg:order-2 h-full lg:mt-0 mt-56 flex items-center justify-center  "> 
                <div className="absolute inset-0 lg:top-20 sm:top-20 top-6 rounded-tr-full bg-purchase-button h-28"></div>
                <div className="absolute inset-x-0 lg:top-76 top-80   rounded-bl-full rounded-br-full bg-purchase-button h-28"></div> 
            </div>
        </div>
    );
};

export default BackgroundComponent;

