import React, { useState, useEffect, useContext } from "react";
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars  } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/contexts/CartContext';
import { NavigationBar } from '@/components/NavigationBar'
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';
import SortBar from '@/components/SortBar';
import Featured from '@/components/Featured';
import Pagination from '@/components/Pagination';

const ITEMS_PER_PAGE = 10;

const ProductsPage = () => {
  const cart = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const execute = async () => {
      const response = await axios.get('/api/products');

      setProducts(response.data);
    }
    execute();
  },
  []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return products.slice(startIndex, endIndex).map((item) => (
      <ProductCard key={item.id} item={item} />
    ));
  };

  return (
    <React.Fragment>
      <Head>
        <title>Products | Jusay Fishmart</title>
      </Head>
      <NavigationBar />
      <Container className="my-5">
        <Row>
          <Col xs={3} className="d-none d-md-flex">
            <FilterBar />
          </Col>
          <Col>
            <Featured />
            <SortBar />
            <div className="products-container">
              {renderData()}
            </div>
            <div className="d-flex justify-content-end">
              <Pagination
                data={products}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={handlePageChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;