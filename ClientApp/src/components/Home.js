import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <section className="hero-banner">
          {/* Hero banner content goes here */}
          <Container>
            <h1>Welcome to Our E-Commerce Store</h1>
            <p>Shop the latest trends in fashion, electronics, and more.</p>
            <a href="/products" className="btn btn-primary">Shop Now</a>
          </Container>
        </section>

        <section className="featured-products">
          <Container>
            <h2>Featured Products</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <CardImg top src="/images/product1.jpg" alt="Product 1" />
                  <CardBody>
                    <CardTitle>Product 1</CardTitle>
                    <CardSubtitle>$19.99</CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/1" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardImg top src="/images/product2.jpg" alt="Product 2" />
                  <CardBody>
                    <CardTitle>Product 2</CardTitle>
                    <CardSubtitle>$24.99</CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/2" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardImg top src="/images/product3.jpg" alt="Product 3" />
                  <CardBody>
                    <CardTitle>Product 3</CardTitle>
                    <CardSubtitle>$29.99</CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/3" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="partners">
          <Container>
            <h2>Our Partners</h2>
            <Row>
              <Col md={3}>
                <img src="/images/partner1.png" alt="Partner 1" />
              </Col>
              <Col md={3}>
                <img src="/images/partner2.png" alt="Partner 2" />
              </Col>
              <Col md={3}>
                <img src="/images/partner3.png" alt="Partner 3" />
              </Col>
              <Col md={3}>
                <img src="/images/partner4.png" alt="Partner 4" />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

