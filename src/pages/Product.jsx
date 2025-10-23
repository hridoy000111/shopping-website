import React from 'react';

const Product = ({product}) => {
    console.log(product)
    const {image,title,price,description}=product;
    return (
        
        <div className='border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-all duration-300 '>
             {/* Product Image */}
      <div className="w-full h-64 flex justify-center items-center overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-600 mb-1 line-clamp-1">{title}</h2>
        <p className="text-gray-500 text-sm line-clamp-2 mb-2">{description}</p>
         <hr className="border-t border-gray-200 my-3 w-full" />
         <div className="flex justify-between items-center mt-3">
        <span className="text-xl font-bold text-green-600 ">${price}</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
          Add to Cart
        </button>
      </div>
        </div>
    );
};

export default Product;