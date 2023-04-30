import React from 'react';

function FilterBar() {
  return (
    <div className="filterbar">
      <div>
        <div className="filter-title">Categories</div>
        <div className="filter-items">
          <div className="item">Fish</div>
          <div className="item">Crustaceans</div>
          <div className="item">Squid</div>
          <div className="item">Shellfish</div>
          <div className="item">Convenience Seafood</div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar;