const courierCharges = [
    { maxWeight: 200, charge: 5 },
    { maxWeight: 500, charge: 10 },
    { maxWeight: 1000, charge: 15 },
    { maxWeight: 5000, charge: 20 },
  ];
  
  const getCourierPrice = (weight) => {
    for (const charge of courierCharges) {
      if (weight <= charge.maxWeight) {
        return charge.charge;
      }
    }
    return 20; // Default highest price
  };
  
  const splitOrderIntoPackages = (selectedItems) => {
    const packages = [];
    let currentPackage = { items: [], totalWeight: 0, totalPrice: 0 };
  
    selectedItems.forEach(item => {
      if (currentPackage.totalPrice + item.price <= 250) {
        currentPackage.items.push(item);
        currentPackage.totalWeight += item.weight;
        currentPackage.totalPrice += item.price;
      } else {
        packages.push(currentPackage);
        currentPackage = { items: [item], totalWeight: item.weight, totalPrice: item.price };
      }
    });
  
    if (currentPackage.items.length > 0) {
      packages.push(currentPackage);
    }
  
    packages.forEach(pkg => {
      pkg.courierPrice = getCourierPrice(pkg.totalWeight);
    });
  
    return packages;
  };
  
  module.exports = { splitOrderIntoPackages };
  