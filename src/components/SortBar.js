import React from 'react';
import { Dropdown } from 'react-bootstrap';

function SortBar() {
  return (
    <div className="sortbar px-3">
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" className="py-0">
            Sort by
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ border: 'none' }}>
            <Dropdown.Item>Featured</Dropdown.Item>
            <Dropdown.Item>Most Popular</Dropdown.Item>
            <Dropdown.Item>Best Seller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default SortBar;