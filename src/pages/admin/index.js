import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AdminSidebar from '@/components/AdminSidebar';

function Admin() {
  return (
    <Row style={{ minHeight: '100vh' }}>
      <Col xs={2}>
        <AdminSidebar />
      </Col>
      <Col>
      </Col>
    </Row>
  );
}

export default Admin;