import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-light mt-5 py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-dark">Facebook</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">Twitter</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">Instagram</a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">Home</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Products</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Cart</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Account</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center mt-3">
                &copy; {new Date().getFullYear()} My E-Commerce Store
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

