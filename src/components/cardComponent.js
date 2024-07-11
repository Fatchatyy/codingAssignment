// CardComponent.jsx
import React from 'react';

const cardComponent = ({ title, description, image }) => {
  return (
    <div className="bg-card  rounded-lg shadow-md items-center">
        <img src={image} alt={title} className="h-15  object-cover bg-card rounded-lg" />
      <h2 className="text-xl font-semibold text-white text-xl font-montserrat mb-2">{title}</h2>
      <p className="text-p font-medium font-montserrat">{description}</p>
    </div>
  );
};

export default cardComponent;
