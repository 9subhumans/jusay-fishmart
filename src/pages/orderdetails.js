import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const OrderDetails = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tilapia',
      image: 'https://via.placeholder.com/150',
      price: 100.0,
      quantity: 2,
      unit: 'kg',
    },
    {
      id: 2,
      name: 'Bangus',
      image: 'https://via.placeholder.com/150',
      price: 200.0,
      quantity: 1,
      unit: 'kg',
    },
  ]);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-4">Order Details</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100px' }}
                      width={100}
                      height={100}
                    />
                    <span className="ml-3">{item.name}</span>
                  </td>
                  <td>{item.quantity + ' ' + item.unit}</td>
                  <td>₱{item.price.toFixed(2)}</td>
                  <td>₱{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" className="text-right">
                  Total
                </td>
                <td>₱{calculateTotal()}</td>
              </tr>
            </tbody>
          </Table>
          <div className="text-right">
            <Button variant="primary">Place Order</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetails;