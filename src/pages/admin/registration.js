import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AccountForm() {

  return(
  <Container style={{minHeight: '100%'}}>
    <Card>
      <Card.Body>
        <Form>
          <Row className="mb-3" style={{width: '35rem' }}>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label >First Name</Form.Label>
          <Form.Control type="text" name="userFName" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="number" name="userLName" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="money" name="userName" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="userEmail" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="userPassword" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="userCPassword" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Select placeholder='Select' name='userGender' aria-label='Select Gender'>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="userPhone" />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button type="submit">
            Submit
          </Button>
        </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  </Container>
  )
}

export default AccountForm;