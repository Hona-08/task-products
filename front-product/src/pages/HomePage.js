import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import PackageList from '../components/PackageList';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedItems(prevItems =>
      prevItems.includes(id) ? prevItems.filter(item => item !== id) : [...prevItems, id]
    );
  };

  const handlePlaceOrder = () => {
    axios.post('http://localhost:5000/api/place-order', { selectedItems })
      .then(response => setPackages(response.data.packages))
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div className="min-h-screen bg-blue-950 p-8">
      <h1 className="text-2xl font-bold text-center text-white">Product List</h1>
      <div className="flex items-center justify-between p-2 border-b border-gray-200">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-white mr-60">Product name</h1>
       </div>  
        <div class="flex justify-end space-x-4">
            <p className="text-white font-bold">$Price</p>
            <p className="text-white font-bold">Weight</p>
      </div></div>
      <ProductList products={products} selectedItems={selectedItems} handleCheckboxChange={handleCheckboxChange} />
      <p className="flex justify-center text-gray-400 font-bold">Here, when the total cost of all products within a single package exceed $250 then it will create another package. </p>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePlaceOrder}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 focus:outline-none"
        >
          Place order
        </button>
      </div>
      {packages.length > 0 && <PackageList packages={packages} />}
    </div>
    
  );
};

export default HomePage;
