import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Carousel from "../components/Carousel/Carousel"

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <section className="hero-banner">
          {/* Hero banner content goes here */}
          <Container>
            <h1>Wizard Recrods</h1>
            <p>Buy records, or we'll break your legs.</p>
          </Container>
        </section>

            <div style={{ maxWidth: 1275, marginLeft: 'auto', marginRight: 'auto', marginBottom: 64 }}>
                <Carousel>
                    <img src={require("./images/CarouselImage1.jpg")} alt="placeholder" />
                    <img src={require("./images/CarouselImage2.jpg")} alt="placeholder" />
                    <img src={require("./images/CarouselImage3.jpg")} alt="placeholder" />
                </Carousel>
            </div>

        <section className="featured-products">
          <Container>
            <h2>Featured Products</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <CardImg top src={require("./images/CD/Essenger-AfterDark.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', marginTop: '15px' }}/>
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
                  <CardImg top src={require("./images/Vinyl/Fushitsusha-1st.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', marginTop: '15px'}} />
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
                  <CardImg top src={require("./images/Vinyl/MakeThemSuffer-HowToSurviveAFuneral.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', marginTop: '15px' }}/>
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
                        <Col md={2}>
                            <img src="../../../images/partners/adisq.png" alt="Partner 1" />
                        </Col>
                        <Col md={2}>
                            <img src="../../../images/partners/desjardins.png" alt="Partner 2" />
                        </Col>
                        <Col md={2}>
                            <img src="../../../images/partners/vice.png" alt="Partner 3" />
                        </Col>
                    </Row>
                </Container>
            </section>
      </div>
    );
  }
}

