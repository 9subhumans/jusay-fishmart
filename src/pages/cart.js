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

const Cart = () => {
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
            <h1 className="my-4">Cart</h1>
            <div className="">

            </div>
            <Table bordered>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th style={{ width: '3rem' }} />
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                      <a href={`/product/${item.id}`}>{item.name}</a>
                    </td>
                    <td>{item.quantity + ' ' + item.unit}</td>
                    <td>₱{item.price}</td>
                    <td>₱{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button 
                        type="button" 
                        size="sm" 
                        variant="outline-danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="text-right"> 
                    Total
                  </td>
                  <td>₱{calculateTotal}</td>
                </tr>
              </tbody>
            </Table>
            <Featured />
            <div className="d-flex justify-content-end mt-5">
              <Link href="/checkout">
                <Button size="lg" variant="primary">Checkout</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;