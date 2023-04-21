import React, { useState, useEffect } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {formik, Field} from 'formik';

function ProductForm() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const execute = async () => {
      const response = await axios.get('/api/products');

      setProducts(response.data);
    }

    execute();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const productId = document.querySelector('[name=productId]').value;
    const unit = document.querySelector('[name=unitName]').value;
    const qty = document.querySelector('[name=productQuantity]').value;
    const price = document.querySelector('[name=productPrice]').value;    


    const response = await axios.post('/api/stockunits', {
      productId,
      unit,
      qty,
      price
    });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="py-5" style={{ width: '30rem' }}>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Select placeholder="Select" name="productId" aria-label="Select Product">
                {
                  products.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))
                }
              </Form.Select>
          </Form.Group>
          <Form.Label>Unit</Form.Label>
                      <option value='KG'>Per Kilo</option>
                      <option value='PC'>By Piece</option>
                      <option value='BK'>Bucket</option>
          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" name="productQuantity" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="money" name="productPrice" />
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