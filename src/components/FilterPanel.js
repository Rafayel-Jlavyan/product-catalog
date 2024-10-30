import React from 'react';
import { debounce } from 'lodash';

const FilterPanel = ({ filterCriteria, onFilterChange }) => {
  const handleCategoryChange = (e) => onFilterChange({ ...filterCriteria, category: e.target.value });
  const handleBrandChange = (e) => onFilterChange({ ...filterCriteria, brand: e.target.value });
  const handlePriceChange = debounce((range) => {
    onFilterChange({ ...filterCriteria, priceRange: range });
  }, 300);
  const handleRatingChange = (e) => onFilterChange({ ...filterCriteria, rating: Number(e.target.value) });

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      <div>
        <label>Category</label>
        <select onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Footwear">Footwear</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div>
        <label>Brand</label>
        <select onChange={handleBrandChange}>
          <option value="">All</option>
          <option value="Brand A">Brand A</option>
          <option value="Brand B">Brand B</option>
          <option value="Brand C">Brand C</option>
          <option value="Brand D">Brand D</option>
          <option value="Brand E">Brand E</option>
        </select>
      </div>
      <div>
        <label>Price Range</label>
        <input type="range" min="0" max="500" onChange={(e) => handlePriceChange([0, e.target.value])} />
      </div>
      <div>
        <label>Rating</label>
        <input type="number" min="0" max="5" step="0.5" onChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default FilterPanel;