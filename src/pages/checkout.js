import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

const CheckoutForm = () => {
  const [form, setForm] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phoneNumber: "",
      paymentMethod: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  }



  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: "",
        paymentMethod: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        zip: Yup.string().required('Required'),
        phoneNumber: Yup.string().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
    {({
      submitForm,
      handleBlur,
      handleChange,
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
                <Col md={8}>
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
                    <Form.Group className="mb-3" controlId="paymentMethod">
                      <select class="form-select">
                        <option value="COD">Cash on Delivery</option>
                        <option value="Gcash">GCash</option>
                      </select>
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
  );
};

export default CheckoutForm;