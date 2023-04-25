import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CartContext } from '@/contexts/CartContext';
import { ToastContext } from '@/contexts/ToastContext';

function ProductCard({ item }) {
  const cart = useContext(CartContext);
  const toast = useContext(ToastContext);
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  }

  const addToCart = () => {
    cart.addItem({ ...item, quantity: Number(quantity) });

    toast.show('Successfully added to cart');
  }

  return (
    <Card key={item.id} className="my-3 product-card">
      <Card.Body>
          <Image
            src={item.image}
            height={200}
            width={320}
            alt={item.image}
            className="card-img"
          />
        <Card.Title className="d-flex justify-content-between">
          <Link href={`product/${item.id}`}>
            {item.name}
          </Link>
          <small>
            <i className="bi bi-heart" />
          </small>
        </Card.Title>
        <Card.Text className="pt-3  ">₱{item.price}.00 per {item.quantity}{item.unit}</Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Form.Control
              type="number"
              value={quantity}
              style={{ maxWidth: '4rem', marginRight: '0.5rem' }}
              onChange={changeQuantity}
            />
            {item.unit}
          </div>
          <Button
            type="button"
            variant="primary"
            className="mr-2"
            onClick={addToCart}
          >
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;