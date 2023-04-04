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
        <Link href="/introduction">
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
          <Nav className="me-auto justify-content-between w-100">
            <div className="d-flex align-items-center">
              <Link href="/products">
                Shop
              </Link>
            </div>
            <div className="d-flex align-items-center ms-auto">
              <Link  as={Nav.Link} href="/cart">
                <FaShoppingCart /> Cart
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;