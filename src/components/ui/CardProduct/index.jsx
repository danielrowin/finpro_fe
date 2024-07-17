import React from "react";
import Image from "next/image";

const CardProduct = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-gray-900 font-bold mt-4">${product.price}</p>
    </div>
  );
};

export default CardProduct;
