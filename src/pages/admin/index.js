import React from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, Table} from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import jwt from 'jsonwebtoken';

import AdminTemplate from '@/components/AdminTemplate';
  const orders = [
    { id: 1, product: 'Product 1', quantity: 2, price: 10.99 },
    { id: 2, product: 'Product 2', quantity: 1, price: 7.99 },
    { id: 3, product: 'Product 3', quantity: 3, price: 12.99 },
  ]

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [10, 20, 15, 25, 30, 20, 35],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxis: [
      {
        type: 'category',
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
    ],
  },
};

const LineChartCard = () => {
  const key = 'line-chart-' + Math.floor(Math.random() * 1000);
}

function Admin(props) {
  return (
    <AdminTemplate size={10}>
      <Row>
        <Col xs={7} className="pt-3">
          <Row className="mb-3">
            <Col xs={4}>
              <Card>
                <Card.Body>
                  <Card.Title>₱0.00</Card.Title>
                  <Card.Text>Total Sales</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <Card.Body>
                <Card.Title>0</Card.Title>
                <Card.Text>Total Orders</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card>
                <Card.Body>
                <Card.Title>0</Card.Title>
                  <Card.Text>Total Products</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Sales</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Monthly Sales</Card.Subtitle>
              <Line data={data} options={options} />
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Latest Orders</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={5} className="pt-3">
          <Card className="mb-3">
            <Card.Body>
                <Card.Title>Revenue</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
                <Card.Text>
                  Total Revenue: $10,000
                </Card.Text>
              </Card.Body>
              </Card>
              <Card  className="mb-3" style={{ height: '280px' }}>
              <Card.Body>
                <Card.Title>Revenue</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
                <Card.Text>
                  Total Revenue: $10,000
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </AdminTemplate>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const { token } = req.cookies;

  try {
    const decoded = jwt.verify(token, process.env.APPSECRET);

    if (!decoded) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {}
    };
  } catch {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

export default Admin;
