import React, { Component } from 'react';
import Carousel from "../components/Carousel";
import { FeaturedProducts, NewVinyl, NewCDs, UsedVinyl, UsedCDs } from './ProductTemplate';
import { Container, Row, Col } from 'reactstrap';
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

                <hr className="divider" />

                <FeaturedProducts />

                <hr className="divider" />

                <NewVinyl />

                <hr className="divider" />

                <NewCDs />

                <hr className="divider" />

                <UsedVinyl />

                <hr className="divider" />

                <UsedCDs />

                <hr className="divider" />

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

