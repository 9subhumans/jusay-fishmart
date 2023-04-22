import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const UNITS = {
  PC: 'per piece',
  KG: 'per kilo',
  BK: 'per bucket'
};

const SingleProductPage = ({ data }) => {
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
          <Image
            alt={data.image}
            src={data.image}
            height={300}
            width={420}
            classNmae="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h1>Fresh Salmon Fillet</h1>
          <p className="lead">{`${data.price} ${UNITS[data.unit]}`}</p>
          <hr />
          <p>{data.description}</p>
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

export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`${process.env.API_URL}/products/${id}`);
  const data = await res.json();


  return {
    props: {
      data,
    },
  };
}

export default SingleProductPage;