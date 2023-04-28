import React, { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '@/contexts/AuthContext';
import { ToastContext } from '@/contexts/ToastContext';

function Login() {
  const auth = useContext(AuthContext);
  const toast = useContext(ToastContext);

  const login = async (values) => {
    const response = await axios.post('/api/login', values);
    const { token } = response.data;

    if (response.status === 200) {
      toast.show('Successfully logged in');

      Cookies.set('token', token);

      Router.push('/verify');
    }
  }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body className="navbar-aqua">
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Jusay FishMart
                  </h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={Yup.object({
                      username: Yup.string().required('Required'),
                      password: Yup.string().required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                      login(values);
                      setSubmitting(false);
                    }}
                  >
                    {({ isSubmitting }) => (
                      <FormikForm>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">Username</Form.Label>
                          <Field
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="username"
                            component="div"
                            className="error text-danger"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="error text-danger"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button
                            variant="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Logging in..." : "Login"}
                          </Button>
                        </div>
                      </FormikForm>
                    )}
                  </Formik>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don&apos;t have an account?{" "}
                      <a href="./user" className="text-primary fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
