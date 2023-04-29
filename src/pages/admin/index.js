import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminSidebar from '@/components/AdminSidebar';
import { Card } from 'react-bootstrap';

function Admin() {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col xs={2}>
        <AdminSidebar />
      </Col>
      <Col>
      <Card style={{ width: '50rem', paddingTop: '6rem', paddingBottom: '6rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <Card.Body>
            <Card.Title>Most Sold Product</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
            <Card.Text>
              Total Sales: 1000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '50rem', paddingTop: '6rem', paddingBottom: '6rem', marginBottom: '0.5rem' }}>
          <Card.Body>
            <Card.Title>Revenue</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
            <Card.Text>
              Total Revenue: $10,000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '50rem', paddingTop: '6rem', paddingBottom: '6rem', marginBottom: '0.5rem', marginRight: '1rem' }}>
          <Card.Body>
            <Card.Title>New Customers</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
            <Card.Text>
              Total New Customers: 50
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={4}>
      <Card style={{ width: '50rem', paddingTop: '13.8rem', paddingBottom: '13.8rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <Card.Body>
            <Card.Title>Actions</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
            <Card.Text>
              <ul>
                <li>Create New Product</li>
                <li>Edit Product</li>
                <li>Delete Product</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '50rem', paddingTop: '6rem', paddingBottom: '6rem', marginBottom: '0.5rem', marginRight: '1rem' }}>
          <Card.Body>
            <Card.Title>New Customers</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Widget</Card.Subtitle>
            <Card.Text>
              Total New Customers: 50
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Admin;
