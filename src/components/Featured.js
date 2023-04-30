import React from 'react';
import Image from 'next/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Featured() {
  return (
    <div className="featuredproduct">
      <div className="featured">
        Featured
      </div>
      <Container className="px-5 pt-4 pb-3">
        <p className="text-center">
          <small>Free shipping for orders over ₱1000 in Cebu!</small>
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="thumbnail">
              <Image
                width={100}
                height={80}
                alt="Alumahan"
                src="/products/alumahan.webp"
              />
            </div>
            <div>
              <h4>Fresh-caught Alumahan</h4>
              <p>
                <small><strike>₱570.00</strike></small> ₱550.00 per 1KG
              </p>
            </div>
          </div>
          <div>
            <div>

            </div>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Featured;