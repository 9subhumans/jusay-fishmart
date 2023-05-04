import React from 'react';
import { Table } from 'react-bootstrap';
import Head from 'next/head';
import Col from 'react-bootstrap/Col';
import AdminSidebar from '@/components/AdminSidebar';
import AdminTemplate from '@/components/AdminTemplate';



const transactions = [
  { id: 1, date: '', description: '', amount: "" },
  { id: 2, date: '', description: '', amount: "" },
  { id: 3, date: '', description: '', amount: "" },
];

const TransactionLog = () => {
  return (
    <>
      <Head>
        <title>Admin | Transaction</title>
      </Head>
      <AdminTemplate size={10}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </AdminTemplate>
    </>
  );
};

export default TransactionLog;