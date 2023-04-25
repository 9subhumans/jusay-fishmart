import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
      setItems(storedItems);
    }
  }, []);

  const addItem = (item) => {
    setItems((prev) => {
      const added = [...prev, item];

      localStorage.setItem('cart', JSON.stringify(added));
      return added;
    });
  }

  const removeItem = (id) => {
    setItems((prev) => {
      const removed = prev.filter((element) => element.id !== id);
      
      localStorage.setItem('cart', JSON.stringify(removed));
      return removed;
    });
  }

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  )
}