import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="py-10 lg:py-24 px-14 lg:px-36">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="mr-28 mb-14">
              <Image src="/images/logo.png" width={128} height={100} alt="Logo" className="mb-7" />
            </div>
            <div className="d-flex flex-wrap xl:flex-nowrap" style={{ maxWidth: 700 }}>
              <div style={{ minWidth: 170 }}>
                <div className="font-bold text-md mb-5 w-full">
                  <b>Navigate</b>
                </div>
                <div className="footer-link mb-2">
                  <Link href="/products">Shop</Link>
                </div>
                <div className="footer-link mb-2">
                  <Link href="/about">About</Link>
                </div>
                <div className="footer-link mb-2">
                  <Link href="/faq">FAQs</Link>
                </div>
              </div>
              <div style={{ minWidth: 170 }}>
                <div className="font-bold text-md mb-5 w-full">
                  <b>My Account</b>
                </div>
                <div className="footer-link mb-2">Orders</div>
                <div className="footer-link mb-2">Purchase History</div>
                <div className="footer-link mb-2">Guide</div>
              </div>
              <div style={{ minWidth: 170 }}>
                <div className="font-bold text-md mb-5 w-full">
                  <b>Customer service</b>
                </div>
                <div className="footer-link mb-2">Help centre</div>
                <div className="footer-link mb-2">Returns & Refunds</div>
                <div className="footer-link mb-2">Contact us</div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <span className="bottom">Jusay Fishmart | 2023 All rights reserved</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;