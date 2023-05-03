import React from 'react';
import { Table } from 'react-bootstrap';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTemplate from '@/components/AdminTemplate';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const inventory = [
  { id: 1, name: 'Item 1', quantity: 10, price: 50 },
  { id: 2, name: 'Item 2', quantity: 5, price: 75 },
  { id: 3, name: 'Item 3', quantity: 20, price: 25 },
];

const InventoryLog = () => {
  return (
    <AdminTemplate size={10}>
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </AdminTemplate>
  );
};

export default InventoryLog;