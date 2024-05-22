import React from 'react';

const PackageList = ({ packages }) => {
  return (
    <div className="mt-8">
      {packages.map((pkg, index) => (
        <div key={index} className="p-4 mb-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold">Package {index + 1}</h3>
          <p className="mt-2">Items - {pkg.items.map(item => item.name).join(', ')}</p>
          <p>Total weight - {pkg.totalWeight}g</p>
          <p>Total price - ${pkg.totalPrice}</p>
          <p>Courier price - ${pkg.courierPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
