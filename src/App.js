// App.js
import React, { useState, useEffect, useMemo } from 'react';
import products from './data/products'; // Import mock data
import FilterPanel from './components/FilterPanel';
import ProductList from './components/ProductList';

const App = () => {
  const [filterCriteria, setFilterCriteria] = useState({
    category: '',
    brand: '',
    priceRange: [0, 500],
    rating: 0,
  });
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (newCriteria) => {
    setFilterCriteria(newCriteria);
  };

  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = filterCriteria.category ? product.category === filterCriteria.category : true;
      const matchesBrand = filterCriteria.brand ? product.brand === filterCriteria.brand : true;
      const matchesPrice = product.price >= filterCriteria.priceRange[0] && product.price <= filterCriteria.priceRange[1];
      const matchesRating = product.rating >= filterCriteria.rating;
      return matchesCategory && matchesBrand && matchesPrice && matchesRating;
    });
  }, [filterCriteria, products]);

  useEffect(() => {
    setFilteredProducts(filterProducts);
  }, [filterProducts]);

  return (
    <div>
      <FilterPanel filterCriteria={filterCriteria} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;