import React, { Component } from 'react';
import Carousel from "../components/Carousel";
import ProductTemplate from "./ProductTemplate";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import '../styles/Home.css';
import '../styles/Fonts.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ maxWidth: 1275, marginLeft: 'auto', marginRight: 'auto', marginBottom: 64 }}>
                    <Carousel>
                        <img src={require("./Images/Carousel/CarouselImage1.jpg")} alt="placeholder" />
                        <img src={require("./Images/Carousel/CarouselImage2.jpg")} alt="placeholder" />
                        <img src={require("./Images/Carousel/CarouselImage3.jpg")} alt="placeholder" />
                    </Carousel>
                </div>

                <hr className="my-divider" />

                <section className="featured-products">
                    <Container>
                        <h1>Featured Products</h1>
                        <Row>
                            <Col md={4} className="d-flex">
                                <a href="/product/1" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width" >
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Essenger - After Dark</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$19.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/2" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Aversions Crown - Tyrant</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$24.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4}>
                                <a href="/product/3" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Make Them Suffer - How To Survive A Funeral</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="my-divider" />

                <section className="new-vinyl">
                    <Container>
                        <h1>New vinyl</h1>
                        <Row>
                            <Col md={4} className="d-flex">
                                <a href="/product/1" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Gojira - Enfant Sauvage</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/2" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Nirvana - In Utero</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$24.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/3" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Norma Jean - All Hail</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="my-divider" />

                <section className="new-compact-disc">
                    <Container>
                        <h1>New CD</h1>
                        <Row>
                            <Col md={4} className="d-flex">
                                <a href="/product/1" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Red Hot Chili Peppers - Californication</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$19.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/2" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Metallica - Masters Of Puppets</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$24.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/3" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">The Killers - Hot Fuss</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="my-divider" />

                <section className="used-vinyl">
                    <Container>
                        <h1>Used vinyl</h1>
                        <Row>
                            <Col md={4} className="d-flex">
                                <a href="/product/1" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Emarosa - 131</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$19.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/2" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Bad Omens - Finding God Before God Finds Me</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$24.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/3" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/VinylBase.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Bring Me The Horizon -  Sempiternal</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="my-divider" />

                <section className="used-compact-disc">
                    <Container>
                        <h1>Used CDs</h1>
                        <Row>
                            <Col md={4} className="d-flex">
                                <a href="/product/1" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Fushitsusha - 1st</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$99.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/2" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Three Days Grace - One-X</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$24.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                            <Col md={4} className="d-flex">
                                <a href="/product/3" className="cardHREF h-100 card-width">
                                    <Card className="h-100 card-width">
                                        <CardImg top className="card-img-top" src={require("./Images/CoverTemplate/CDBase.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                        <CardBody className="flex-grow-1">
                                            <CardTitle className="card-title">Fall Out Boy - From Under The Cork Tree</CardTitle>
                                            <CardSubtitle className="card-subtitle"><b>$29.99</b></CardSubtitle>
                                            <CardText></CardText>
                                        </CardBody>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <hr className="my-divider" />

                <section className="partners">
                    <Container>
                        <h4>Our Partners</h4>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <Col md={2}>
                                <img src="../../../Images/Partners/adisq.png" alt="Partner 1" />
                            </Col>
                            <Col md={2}>
                                <img src="../../../Images/Partners/desjardins.png" alt="Partner 2" />
                            </Col>
                            <Col md={2}>
                                <img src="../../../Images/Partners/vice.png" alt="Partner 3" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

