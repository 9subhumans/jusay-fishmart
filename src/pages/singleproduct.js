import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src="https://via.placeholder.com/500x500" alt="Fresh Salmon Fillet" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Fresh Salmon Fillet</h1>
          <p className="lead">$19.99 per pound</p>
          <hr />
          <p>Our Fresh Salmon Fillet is perfect for any seafood lover! This salmon is sustainably sourced and delivered fresh to your doorstep. It's packed with omega-3 fatty acids and is a great source of protein. Each fillet is approximately 1 pound and can be cooked in a variety of ways, including grilled, baked, or pan-seared.</p>
          <div className="my-3">
            <Button variant="secondary" onClick={handleQuantityDecrease}>-</Button>{' '}
            <span className="mx-2">{quantity}</span>
            <Button variant="secondary" onClick={handleQuantityIncrease}>+</Button>
          </div>
          <Button variant="primary" className="my-3">Add to Cart</Button>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Product Features</h3>
          <ul>
            <li>Sustainably sourced</li>
            <li>Fresh, never frozen</li>
            <li>Packed with omega-3 fatty acids</li>
            <li>High in protein</li>
            <li>Approximately 1 pound per fillet</li>
          </ul>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Product Reviews</h3>
          <div className="my-3">
            <p><strong>Customer Review 1:</strong> "I ordered the Fresh Salmon Fillet and it was delicious! It arrived quickly and was still fresh. I would definitely recommend this product."</p>
          </div>
          <div className="my-3">
            <p><strong>Customer Review 2:</strong> "I've been ordering from Jusay Fishmart Ecommerce for a while now, and their Fresh Salmon Fillet is one of my favorites. It's always fresh and the quality is top-notch."</p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <h3>Related Products</h3>
          <div className="my-3">
            <p><a href="#">Fresh Tuna Steak</a></p>
          </div>
          <div className="my-3">
            <p><a href="#">Lobster Tail</a></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProductPage;