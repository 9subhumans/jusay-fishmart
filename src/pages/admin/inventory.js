import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import Head from 'next/head';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTemplate from '@/components/AdminTemplate';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';



const inventory = [
  { id: 1, name: 'Alumahan', quantity: 10, price: 550, created: "05-04-2023" },
  { id: 2, name: 'Baby Tuna', quantity: 16, price: 100, created: "05-04-2023" },
  { id: 3, name: 'Bangus', quantity: 15, price: 100, created: "05-04-2023" },
  { id: 4, name: 'Bitilya', quantity: 13, price: 300, created: "05-04-2023" },
  { id: 5, name: 'Tilapia', quantity: 12, price: 100, created: "05-04-2023" },
  { id: 6, name: 'Salmon Head', quantity: 15, price: 100, created: "05-04-2023" },
  { id: 7, name: 'Danggit', quantity: 16, price: 139, created: "05-04-2023" },
  { id: 8, name: 'Dapa', quantity: 15, price: 478, created: "05-04-2023" },
  { id: 9, name: 'Agoot', quantity: 14, price: 469 , created: "05-04-2023" },
  { id: 10, name: 'Alakaak', quantity: 13, price: 240, created: "05-04-2023" },
  { id: 11, name: 'Dalag', quantity: 12, price: 209, created: "05-04-2023" },
  { id: 12, name: 'Apahap', quantity: 18, price: 779, created: "05-04-2023" },
  { id: 13, name: 'Dilat', quantity: 16, price: 340, created: "05-04-2023" },
  { id: 14, name: 'Asohos', quantity: 15, price: 449, created: "05-04-2023" },
  { id: 15, name: 'Dilis', quantity: 17, price: 180, created: "05-04-2023" },
  { id: 16, name: 'Babansi', quantity: 14, price: 290, created: "05-04-2023" },
  { id: 17, name: 'Dorado', quantity: 13, price: 320, created: "05-04-2023" },
  { id: 18, name: 'Dulong', quantity: 11, price: 250, created: "05-04-2023" },
  { id: 19, name: 'Bakoko', quantity: 17, price: 539, created: "05-04-2023" },
  { id: 20, name: 'Banak', quantity: 14, price: 279, created: "05-04-2023" },
  { id: 21, name: 'Espada', quantity: 13, price: 429, created: "05-04-2023" },
  { id: 22, name: 'Gulyasan', quantity: 25, price: 390, created: "05-04-2023" },
  { id: 23, name: 'Hito', quantity: 17, price: 249, created: "05-04-2023" },
  { id: 24, name: 'Tangigue', quantity: 15, price: 470, created: "05-04-2023" },
  { id: 25, name: 'Bidbid', quantity: 14, price: 150, created: "05-04-2023" },
  { id: 26, name: 'Tawilis', quantity: 16, price: 229, created: "05-04-2023" },
  { id: 27, name: 'Biloan', quantity: 13, price: 450, created: "05-04-2023" },
  { id: 28, name: 'Bisogo', quantity: 23, price: 520, created: "05-04-2023" },
  { id: 29, name: 'Tulingan', quantity: 10, price: 489 , created: "05-04-2023" },
  { id: 30, name: 'Alupihang Dagat', quantity: 19, price: 249, created:"05-04-2023" },
  { id: 31, name: 'Biya', quantity: 15, price: 380, created: "05-04-2023" },
  { id: 32, name: 'Pugita', quantity: 11, price: 300, created: "05-04-2023" },
  { id: 33, name: 'Halaan', quantity: 12, price: 325, created: "05-04-2023" },
  { id: 34, name: 'Hipon', quantity: 11, price: 209, created: "05-04-2023" },
  { id: 35, name: 'Guso', quantity: 17, price: 104, created: "05-04-2023" },
  { id: 36, name: 'Live Tuyom', quantity: 25, price: 70, created: "05-04-2023" },
  { id: 37, name: 'Pusit', quantity: 13, price: 530, created: "05-04-2023" },
  { id: 38, name: 'Lato', quantity: 26, price: 130, created: "05-04-2023" },
  { id: 39, name: 'Chilled Tuyom', quantity: 15, price: 1500, created: "05-04-2023" },
  { id: 40, name: 'Tahong', quantity: 14, price: 150, created: "05-04-2023" },
  { id: 41, name: 'Talaba', quantity: 13, price: 160, created: "05-04-2023" },
  { id: 42, name: 'Burara', quantity: 12, price: 419, created: "05-04-2023" },
  { id: 43, name: 'Chabeta', quantity: 19, price: 329, created: "05-04-2023" },

];



const InventoryLog = () => {
  return (
    <>
    <Head>
      <title>Admin | Inventory Log</title>
      </Head>
        <AdminTemplate size={10}>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.created}</td>
                  </tr>
                ))}
          </tbody>
        </Table>
      </AdminTemplate>
    </>
  );
};

export default InventoryLog;