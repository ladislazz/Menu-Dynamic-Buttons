import React from 'react';

const Categories = ({ uniqueCategories }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((category) => {
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
