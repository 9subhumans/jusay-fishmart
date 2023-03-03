import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('[name=productName]').value;
    const description = document.querySelector('[name=productDescription]').value;

    const response = await axios.post('/api/products', {
      name,
      description
    });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="py-5" style={{ width: '30rem' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" name="productName" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" name="productDescription" rows={3} />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductForm;