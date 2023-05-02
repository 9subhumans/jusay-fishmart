import React from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminSidebar from '@/components/AdminSidebar';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

function Admin() {
  return (
    <  >
      <Head>
        <title>Admin | Dashboard</title>
      </Head>
        <Row style={{ minHeight: '100vh' }}>
          <Col xs={2}>
            <AdminSidebar />
          </Col>
          <Col className="pt-3">
            <Row className="mb-3">
              <Col>
                <Card>
                  <Card.Body>
                  <Card.Title>Total Sales</Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                  <Card.Title>Total Orders</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                  <Card.Title>Total Products</Card.Title>
                    <Card.Text> </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Card className="mb-3" style={{ height: '527.9px' }}>
              <Card.Body>
                <Card.Title>Sales Statistics</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Monthly Sales</Card.Subtitle>
                <Line data={data} options={options} />
              </Card.Body>
            </Card>
            <Card className="mb-3" style={{ height: '280px' }}>
              <Card.Body>
                <Card.Title>Latest Orders</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
                <Card.Text>
                  Total New Customers: 50
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="pt-3" xs={4}>
            <Card className="mb-3" style={{ height: '610px' }}>
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
    </>
  );
}

export default Admin;
