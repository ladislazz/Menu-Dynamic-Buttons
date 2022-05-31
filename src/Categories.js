import React from 'react';

const Categories = ({ items }) => {
  const categories = items.map((item) => item.category);
  const uniqueCategories = ['all', ...new Set(categories)];

  return (
    <div className="btn-container">
      {uniqueCategories.map((category) => {
        console.log(category);
        return (
          <button className="filter-btn" type="button">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
