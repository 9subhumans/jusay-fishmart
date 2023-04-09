import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from 'react-icons/fa';
import { faBars  } from '@fortawesome/free-solid-svg-icons';
import { ReactSVG } from 'react-svg';

function NavigationBar() {
  return (
    <Navbar className="navbar navigationbar" expand="lg">
      <Container>
        <Link href="/Introduction">
          <Navbar.Brand>
            <Image
              width={75}
              height={45}
              alt="Fish Logo"
              className="navbar-logo"
              src="/images/logo.png"
            />
            Jusay&apos;s Fishmart
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
          FAQ's
        </Link>
      </div>
      <div className="d-flex align-items-center ms-auto">
        <Nav className="me-3">
          <Link href="/cart" as={Nav.Link}>
            <FaShoppingCart /> Cart
          </Link>
        </Nav>
        {/* <Nav className="ms-3">
          <Link href="./LogIn" className="me-3">
            Log in
          </Link>
          <Link href="./user" className="me-3">
            Sign Up
          </Link>
        </Nav> */}
      </div>
    </Nav>
  </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;