import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ data, itemsPerPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPaginationItems = () => {
    let items = [];

    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() =>
          activePage !== 1 && handlePageChange(activePage - 1)
        }
        disabled={activePage === 1}
      />
      {renderPaginationItems()}
      <Pagination.Next
        onClick={() =>
          activePage !== totalPages && handlePageChange(activePage + 1)
        }
        disabled={activePage === totalPages}
      />
    </Pagination>
  );
};

export default PaginationComponent;