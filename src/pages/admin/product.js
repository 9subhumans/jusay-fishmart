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
    const price = document.querySelector('[name=productPrice]').value;
    const unit = document.querySelector('[name=productUnit]').value;
    const quantity = document.querySelector('[name=productQuantity').value;


    const response = await axios.post('/api/products', {
      name,
      description,
      price,
      unit,
      quantity  

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
            <Form.Label>Unit</Form.Label>
              <Form.Select name='productUnit'>
                <option value='KG'>Per Kilo</option>
                <option value='PC'>By Piece</option>
                <option value='BK'>Bucket</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" name="productQuantity" />
          </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="money" name="productPrice"  />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Description</Form.Label>
              <Form.Control as="textarea" name="productDescription"  />
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
