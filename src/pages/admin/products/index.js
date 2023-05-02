import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const ProductsTable = ({ products }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 25;
  const pageCount = Math.ceil(products.length / pageSize);

  const sortedProducts = products.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const tableRows = filteredProducts
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <Link href={`/admin/products/${product.id}`} target="_blank">
            {product.name}
          </Link>
        </td>
        <td>{product.price}</td>
        <td>{product.unit}</td>
        <td>{product.quantity}</td>
        <td>{product.stockunit}</td>
      </tr>
    ));

  return (
    <>
      <Head>
        <title>Products | Admin</title>
      </Head>
      <Container className="pt-5">
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-end mb-3">
              <Link href="/admin/products/create">
                <Button>
                  Create +
                </Button>
              </Link>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <Link href="/admin/stockunit">
                <Button>
                  Add Stock Unit
                </Button>
              </Link>
            </div>
            <Form.Control
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearch}
              className="mb-5"
            />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th onClick={() => handleSort("id")}>ID</th>
                  <th onClick={() => handleSort("name")}>Name</th>
                  <th onClick={() => handleSort("price")}>Price</th>
                  <th onClick={() => handleSort("unit")}>Unit</th>
                  <th onClick={() => handleSort("quantity")}>Quantity</th>
                  <th onClick={() => handleSort("stockunit")}>Stock Unit</th>
                </tr>
              </thead>
              <tbody>{tableRows}</tbody>
            </Table>
            <Pagination>
              {Array.from({ length: pageCount }).map((_, i) => (
                <Pagination.Item
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default ProductsTable;