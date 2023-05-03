import React from 'react';
import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminSidebar from '@/components/AdminSidebar';

function AdminTemplate({ children, size }) {
  return (
    <>
      <Head>Admin</Head>
      <Row style={{ minHeight: '100vh' }}>
        <Col xs={2}>
          <AdminSidebar />
        </Col>
        <Col xs={size}>
          {children}
        </Col>
      </Row>
    </>
  )
}

export default AdminTemplate;