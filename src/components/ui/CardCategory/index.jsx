import React from "react";

const CardCategory = ({ category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <h2 className="text-xl font-bold mb-2">{category.name}</h2>
      <p className="text-gray-700">{category.description}</p>
    </div>
  );
};

export default CardCategory;
