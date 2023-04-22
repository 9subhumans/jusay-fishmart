import React, { useState, useEffect, document } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  
  const ProceedLogin =(e) => {
    e.preventDefault();
    if(validate()){
    
    console.log('proceed');
    }
  }
  const validate=()=>{
    let result=true;
      if(username === '' || username ===null){
      result=false;
      toast.warning('Please Enter Username');
      }
      if(password === '' || password ===null){
      result=false;
      toast.warning('Please Enter Password');
      }
    return result; 
  }


  function login(){
    console.warn(email, password)
  }

  return (
    <div>
      <Container >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body className="navbar-aqua">
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Jusay FishMart</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control 
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                          type="email" 
                          placeholder="Enter username" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)} 
                          type="password" 
                          placeholder="Password" />
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
                        <Button onClick={login} variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don&apos;t have an account?{" "}
                        <a href="./user" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
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