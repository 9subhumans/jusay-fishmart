import Head from 'next/head';
import { FaChevronDown } from "react-icons/fa";
import { Accordion, Container } from "react-bootstrap";
import { NavigationBar } from '@/components/NavigationBar'
import Footer from '@/components/Footer';

function FAQPage() {
  return (
    <>
    <Head>
      <title>Jusay Fishmart | FAQ</title>
    </Head>
    <NavigationBar />
      <Container className="my-5">
        <h1 className="text-cente mb-5">Frequently Asked Questions</h1>
        <Accordion className="mb-5" defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaChevronDown className="me-2" />
              What is Jusay Fishmart?
            </Accordion.Header>
            <Accordion.Body>
              Jusay Fishmart is an ecommerce platform that sells fresh and
              quality seafood products delivered right to your doorstep.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaChevronDown className="me-2" />
              Where do you get your products?
            </Accordion.Header>
            <Accordion.Body>
              We source our products from trusted and reliable local suppliers
              to ensure their quality and freshness.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FaChevronDown className="me-2" />
              How can I place an order?
            </Accordion.Header>
            <Accordion.Body>
              You can place an order by creating an account on our website,
              browsing our products, and adding them to your cart. You can then
              proceed to checkout and provide your shipping and payment
              information to complete your order.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <FaChevronDown className="me-2" />
              What are your payment options?
            </Accordion.Header>
            <Accordion.Body>  
              We accept payments through major credit cards such as Visa,
              Mastercard and as through popular
              payment gateways such as PayPal and GCash.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <FaChevronDown className="me-2" />
              What is your delivery policy?
            </Accordion.Header>
            <Accordion.Body>
              We offer free delivery within the Cebu area for orders over Php
              1,000. For orders below Php 1,000, a delivery fee of Php 100 will
              be charged. For orders outside the Cebu area, additional fees may
              apply.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer /> 
    </>
  );
}

export default FAQPage;
