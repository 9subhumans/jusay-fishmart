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
  const [mask, setMask] = useState('');

  const changeQuantity = (e) => {
    const input = event.target;
    const value = parseInt(input.value);

    if (isNaN(value) || value < 1) {
      // setQuantity(1);
    } else {
      setQuantity(value);
    }
  }

  const handleEnter = (e) => {
    setMask(quantity);
    setQuantity('');
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setQuantity(mask);
    }
  };

  const addToCart = () => {
    cart.addItem({ ...item, quantity: Number(quantity) });

    toast.show('Successfully added to cart');
  }

  return (
    <Card key={item.id} className="my-3 product-card">
      {
        item.featured ? <div className="featured">
          Featured
        </div> : null
      }
      <Card.Body>
          <Image
            src={item.image}
            height={200}
            width={320}
            alt={item.name}
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
        <Card.Text className="pt-3  ">
          <span className="rubik price">
            <span className="symbol">₱</span>
            {item.price}.00</span> per {item.quantity}{item.unit}
        </Card.Text>
        <div className="button-container">
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              value={quantity}
              onChange={changeQuantity}
              onFocus={handleEnter}
              onBlur={handleBlur}
              className="quantity"
            />
            {item.unit}
          </div>
          <Button
            type="button"
            variant="primary"
            className="addbutton mr-2"
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