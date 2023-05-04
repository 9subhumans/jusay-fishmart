import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartContext } from '@/contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { ReactSVG } from 'react-svg';

import { AuthContext } from '@/contexts/AuthContext';

export function NavigationBar() {
  const cart = useContext(CartContext);
  const auth = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery); // Do something with the search query
  };

  return (
    <Navbar className="navbar navigationbar" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <Image
              width={75}
              height={45}
              alt="Fish Logo"
              className="navbar-logo"
              src="/images/logo2.png"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto w-100">
            <div className="d-flex align-items-center">
              <Link href="/products" className="me-3">
                Shop
              </Link>
              <Link href="./about" className="me-3">
                About Us
              </Link>
              <Link href="./contact" className="me-3">
                Contact Us
              </Link>
              <Link href="faq" className="me-3">
                FAQ&apos;s
              </Link>
            </div>
            <div className="d-flex align-items-center ms-auto">
            <Form onSubmit={handleSearchSubmit} className="me-5">
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="outline-secondary" type="submit">
                    Search
                  </Button>
                </InputGroup>
              </Form>
              <Nav className="me-3">
                {
                  auth.isAuthenticated ? (
                    <Link href={`/orders/${auth.id}`}>
                      {auth.firstName}
                    </Link>
                  ) : (
                    <Link href="/LogIn">
                      Login
                    </Link>
                  )
                }
              </Nav>
              <Nav className="me-3">
                <Link href="/cart">
                  <i className="bi bi-cart4" /> Cart {
                    cart.items.length ? <Badge>{cart.items.length}</Badge> : null
                  }
                </Link>
              </Nav>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export function withNavigationBar(children) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}