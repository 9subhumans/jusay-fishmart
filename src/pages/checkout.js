import { useState, useContext } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { NavigationBar } from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Featured from '@/components/Featured';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { ToastContext } from '@/contexts/ToastContext';

const CheckoutForm = () => {
  const toast = useContext(ToastContext);

  const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      paymentmethod: "",
  });

  const handleSubmit = async ({
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    paymentmethod
  }) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const items = cart.map((c) => ({
      productId: c.id,
      qty: c.quantity,
      subtotal: c.quantity * c.price,
    }));
    const response = await axios.post(`/api/orders`, {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      phoneNumber,
      paymentmethod,
      items
    });

    if (response.statusText === 'OK') {
      toast.show('Order successful!');
      
      setTimeout(() => {
        localStorage.setItem('cart', []);
        Router.push('/orders');
      }, 500)
    }
  }

  return (
    <>
    <Head>
        <title>Checkout | Jusay Fishmart</title>
      </Head>
      <NavigationBar />
      <Container className="mb-5">
        <Row>
          <Col>
            <h1 className="my-4">Checkout</h1>
            <div className="">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                phoneNumber: "",
                paymentmethod: "Cash on Delivery",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required('Required'),
                lastName: Yup.string().required('Required'),
                address: Yup.string().required('Required'),
                city: Yup.string().required('Required'),
                state: Yup.string().required('Required'),
                zip: Yup.string().required('Required'),
                phoneNumber: Yup.string().required('Required'),
                paymentmethod: Yup.string().required('Required'),
              })}
              onSubmit={handleSubmit}
            >
            {({
              submitForm,
              handleBlur,
              handleChange,
              setFieldValue,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <React.Fragment>
                <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }} > 
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>
                      <Form noValidate>
                        <h2>Shipping Information</h2>
                          <Row className="mb-3" style={{width: '40rem' }}>
                          <Form.Group className="mb-3" as={Col} controlId="firstName">
                              <Form.Control 
                                type="text" 
                                placeholder="First Name" 
                                value={values.firstName} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                              />
                            {touched.firstName && errors.firstName ? <div className="text-danger">{errors.firstName}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" as={Col} controlId="lastName">
                              <Form.Control 
                                  type="text" 
                                  placeholder="Last Name" 
                                  value={values.lastName} 
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.lastName && errors.lastName ? <div className="text-danger">{errors.lastName}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                              <Form.Control 
                                  type="text" 
                                  placeholder="Address" 
                                  value={values.address} 
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.address && errors.address ? <div className="text-danger">{errors.address}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" controlId="city">
                              <Form.Control 
                                  type="text" 
                                  placeholder="City" 
                                  value={values.city} 
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.city && errors.city ? <div className="text-danger">{errors.city}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" controlId="state">
                              <Form.Control 
                                  type="text" 
                                  placeholder="State" 
                                  value={values.state} 
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.state && errors.city ? <div className="text-danger">{errors.state}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" controlId="zip">
                              <Form.Control 
                                  type="text" 
                                  placeholder="Zip code" 
                                  value={values.zip} 
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.zip && errors.zip ? <div className="text-danger">{errors.zip}</div> : null}
                          </Form.Group>
                            <Form.Group className="mb-3" controlId="phoneNumber">
                              <Form.Control 
                                  type="text" 
                                  placeholder="Phone (optional)" 
                                  value={values.phoneNumber}
                                  onChange={handleChange} 
                                  onBlur={handleBlur} 
                                />
                              {touched.phoneNumber && errors.phoneNumber ? <div className="text-danger">{errors.phoneNumber}</div> : null}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="paymentmethod">
                              <select class="form-select" values={values.paymentmethod} onChange={e => setFieldValue('paymentmethod', e.target.value)}>
                                <option value="COD">Cash on Delivery</option>
                                <option value="Gcash">GCash</option>
                              </select>
                              {touched.paymentmethod && errors.paymentmethod ? <div className="text-danger">{errors.paymentmethod}</div> : null}
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                              <Button type="button" onClick={submitForm}>
                                Place Order
                              </Button>
                            </div>
                          </Row>
                        </Form>
                        <h2>Order Summary</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span>Product</span>
                          <span>Price per Unit</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span>Product 1</span>
                          <span>$10.00</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span>Product 2</span>
                          <span>$20.00</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span>Subtotal</span>
                          <span>$30.00</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span>Total Cost</span>
                          <span>$33.00</span>
                        </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Container>
              </React.Fragment>
            )}
            </Formik>
            </div>
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

export default CheckoutForm;