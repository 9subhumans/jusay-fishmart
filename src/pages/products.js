import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Card, Form, Button, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars  } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, NavDropdown, InputGroup } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/contexts/CartContext';
import { NavigationBar } from '@/components/NavigationBar'
import ProductCard from '@/components/ProductCard';


const ProductsPage = () => {
  const cart = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const response = await axios.get('/api/products');

      setProducts(response.data);
    }
    execute();
  },
  []);

  return (
    <React.Fragment>
      <NavigationBar />
      <Container className="my-5">
        <div className="products-container">
          {
            products.map((item) => <ProductCard key={item.id} item={item} />)
          }
        </div>
      </Container>
    </React.Fragment>
  );
};

export default ProductsPage;