import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { Formik } from 'formik';
import * as yup from 'yup';
import { schema } from '@/schemas/userSchema';


function AccountForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
});

  // useEffect(() => {
  //   const execute = async () => {
  //     try{
  //       const response = await axios.get('/api/users');
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   execute();
  // }, []);



  const onSubmit = (values) => {
    try{
      const  response = axios.post('/api/users', values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    Router.push('/products');
    return false;
  };
  
  return(
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
    >
    {({
      submitForm,
      handleSubmit,
      handleBlur,
      handleChange,
      values,
      touched,
      isValid,
      errors,
    }) => (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }} >
        <Card>
          <Card.Body className="bg-gradient-1">
            <Form noValidate>
              <Row className="mb-3" style={{width: '38rem' }}>
                {console.log(errors)}
                <Form.Group className="mb-3" as={Col}>
                  <Form.Label >First Name</Form.Label>
                  <Form.Control 
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    type="text"
                    name="firstName"
                  />
                  {
                    errors.firstName ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                    ) : null
                  }
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                    type="text"
                    name="lastName"
                  />
                  {
                    errors.lastName ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                        {errors.lastName}
                      </Form.Control.Feedback>
                    ) : null
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control 
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    type="text"
                    name="username"
                  />
                  {
                    errors.username ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                     ) : null
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    type="email"
                    name="email"
                  />
                  {
                    errors.email ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    ) : null
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    isInvalid={!!errors.password}
                    type="password"
                    name="password"
                  />
                  {
                    errors.password ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    ) : null
                  }
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control 
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.confirmPassword}
                    type="password"
                    name="confirmPassword"
                  />
                  {
                    errors.confirmPassword ? (
                      <Form.Control.Feedback className="d-block" type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    ) : null
                  }
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button  type="button" onClick={submitForm}>
                    Submit
                  </Button>
                </div>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    )}
    </Formik>
  )
}

export default AccountForm;