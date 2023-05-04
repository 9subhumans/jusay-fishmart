import React, { useState, useMemo, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { NavigationBar } from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Featured from '@/components/Featured';
import { CartContext } from '@/contexts/CartContext';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Orders = () => {
  const cart = useContext(CartContext);
  const [selected, setSelected] = useState([]);

  const calculateTotal = useMemo(() => {
    let total = 0;
    cart.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  }, [cart]);


  const handleRemove = (id) => {
    const confirmed = confirm('Are you sure you want to remove this item from cart?');
    
    if (confirmed) {
      cart.removeItem(id);
    }
  }

  return (
    <>
    <Head>
        <title>Cart | Jusay Fishmart</title>
      </Head>
      <NavigationBar />
      <Container className="mb-5">
        <Row>
          <Col>
            <h1 className="my-4">
              Order Status: Your order is on our list!
              &nbsp;
              <svg width="10" height="10">
                <circle cx="5" cy="5" r="5" fill="yellow" />
              </svg>
            </h1>
            <div className="">
              Thank you for placing your order with us! Our team is currently processing your order and we're working hard to get it ready for shipment as soon as possible. We understand that you're excited to receive your purchase and we want to assure you that we're doing everything we can to make that happen.
            </div>
            <br />
            <div>
            Rest assured that we will review your order quickly and efficiently, and we will notify you promptly if it has already been shipped by today.
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Orders;