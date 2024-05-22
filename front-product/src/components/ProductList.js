import React from 'react';

const ProductList = ({ products, selectedItems, handleCheckboxChange }) => {
  return (
    <div className="mt-4">
      {products.map(product => (
        <div key={product.id} className="flex  justify-between p-2 border-b border-gray-200">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedItems.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
              className="mr-2"
            />
            <span className="font-medium text-white" >{product.name}</span>
          </div>
          <div>
            <span className="text-white">${product.price}</span> - <span className="text-white">{product.weight}g</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
