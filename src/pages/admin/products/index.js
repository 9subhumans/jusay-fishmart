import React, { useState, useMemo, useContext, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import jwt from 'jsonwebtoken';

import AdminTemplate from '@/components/AdminTemplate';
import AdminSidebar from '@/components/AdminSidebar';
import { ToastContext } from '@/contexts/ToastContext';

const PAGE_SIZE = 10;

const ProductsTable = ({ products }) => {
  const toast = useContext(ToastContext);

  const [data, setData] = useState(products);
  const [sortConfig, setSortConfig] = useState({
    key: 'id',
    direction: 'ascending',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = useMemo(() => Math.ceil(data.length / PAGE_SIZE), [data]);

  useEffect(() => {

  }, [data]);

  const sortedProducts = data.sort((a, b) => {
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

  const refreshTable = async () => {
    const response = await axios.get(`/api/products`);
    setData(response.data);
  }

  const handleDelete = async (id) => {
    const confirmed = confirm('Are you sure you want to delete this item?');

    if (confirmed) {
      const response = await axios.delete(`/api/products/${id}`);

      if (response.status === 200 && response.data.affectedRows > 0) {
        toast.show('Product deleted');
        refreshTable();
      }
    }
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const tableRows = filteredProducts
    .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    .map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <Link href={`/admin/products/${product.id}`} target="_blank">
            {product.name}
          </Link>
        </td>
        <td>{product.unit}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td style={{ width: 50 }}>
          <Button size="sm" variant="danger" type="button" onClick={() => handleDelete(product.id)}>
            <i class="bi bi-trash" />
          </Button>
        </td>
      </tr>
    ));

  return (
    <AdminTemplate size={10}>
      <div className="p-5">
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
              <th onClick={() => handleSort("name")}>Product Name</th>
              <th onClick={() => handleSort("unit")}>Unit</th>
              <th onClick={() => handleSort("quantity")}>Quantity</th>
              <th onClick={() => handleSort("price")}>Unit Price</th>
              <th>Delete</th>
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
      </div>
    </AdminTemplate>
  );
};

export async function getServerSideProps(context) {
  const { req } = context;
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, process.env.APPSECRET);

    if (!decoded) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    const res = await fetch(`${process.env.API_URL}/products`);
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

export default ProductsTable;