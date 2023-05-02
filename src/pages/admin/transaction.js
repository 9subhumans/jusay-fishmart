import React from 'react';
import { Table } from 'react-bootstrap';

const transactions = [
  { id: 1, date: '2022-05-01', description: 'Sale', amount: 100 },
  { id: 2, date: '2022-04-25', description: 'Purchase', amount: -50 },
  { id: 3, date: '2022-04-20', description: 'Sale', amount: 75 },
];

const TransactionLog = () => {
  return (
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
  );
};

export default TransactionLog;