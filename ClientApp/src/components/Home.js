import React, { Component } from 'react';
import Carousel from "../components/Carousel/Carousel";
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    state = {
        formData: {
            name: '',
            email: '',
            description: ''
        },
        errors: {}
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        // Asynchronous validation logic here
        // For the sake of this example, let's assume we need the name and email to be filled in.
        const errors = {};

        if (!this.state.formData.name.trim()) {
            errors.name = "Name is required.";
        }
        if (!this.state.formData.email.trim()) {
            errors.email = "Email is required.";
        }
        if (!this.state.formData.description.trim()) {
            errors.description = "A description is required.";
        }

        this.setState({ errors });

        if (!Object.keys(errors).length) {
            console.log('Form is valid!'); // Or do whatever you need on valid submission
        }
    }

  render() {
    return (
      <div>
        <section className="hero-banner">
          {/* Hero banner content goes here */}
          <Container>
            <h1>Wizard Records</h1>
                    <p>"From yesterday's vinyls to today's hits."</p>
          </Container>
        </section>

            <div style={{ maxWidth: 1275, marginLeft: 'auto', marginRight: 'auto', marginBottom: 64 }}>
                <Carousel>
                    <img src={require("./images/CarouselImage1.jpg")} alt="placeholder" />
                    <img src={require("./images/CarouselImage2.jpg")} alt="placeholder" />
                    <img src={require("./images/CarouselImage3.jpg")} alt="placeholder" />
                </Carousel>
            </div>

            <hr className="my-divider" />   

            <section className="featured-products">
                <Container>
                    <h2>Featured Products</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/Essenger-AfterDark.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Essenger - After Dark</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/1" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/AversionsCrown-Tyrant.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Aversions Crown - Tyrant</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/2" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/MakeThemSuffer-HowToSurviveAFuneral.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Make Them Suffer - How To Survive A Funeral</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/3" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="my-divider" />

            <section className="new-vinyl">
                <Container>
                    <h2>New vinyl</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/Gojira-EnfantSauvage.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Gojira - Enfant Sauvage</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/1" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/Nirvana-InUtero.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Nirvana - In Utero</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/2" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/NormaJean-AllHail.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Norma Jean - All Hail</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/3" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="my-divider" />

            <section className="new-compact-disc">
                <Container>
                    <h2>New CD</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/RedHorChiliPeppers-Californication.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Red Hot Chili Peppers - Californication</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/1" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/Metallica-MasterOfPuppets.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Metallica - Masters Of Puppets</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/2" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/TheKillers-HotFuss.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>The Killers - Hot Fuss</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/3" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="my-divider" />

            <section className="used-vinyl">
                <Container>
                    <h2>Used vinyl</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/Emarosa-131.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Emarosa - 131</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/1" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/BadOmens-FindingGodbeforeGodFindsMe.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Bad Omens - Finding God Before God Finds Me</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/2" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/Vinyl/Bmth-Sempiternal.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Bring Me The Horizon -  Sempiternal</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/3" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <hr className="my-divider" />

            <section className="used-compact-disc">
                <Container>
                    <h2>Used CDs</h2>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/Fushitsusha-1st.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Fushitsusha - 1st</CardTitle>
                                    <CardSubtitle><b>$99.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/1" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/ThreeDaysGrace-OneX.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Three Days Grace - One-X</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/2" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <CardImg top src={require("./images/CD/FallOutBoys-FromUnderTheCorkTree.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                                <CardBody>
                                    <CardTitle>Fall Out Boy - From Under The Cork Tree</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                    <a href="/product/3" className="btn btn-secondary">Details</a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section> <section className="featured-products">
          <Container>
            <h2>Featured Products</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <CardImg top src={require("./images/CD/Essenger-AfterDark.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}/>
                  <CardBody>
                    <CardTitle>Essenger - After Dark</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/1" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                    <CardImg top src={require("./images/Vinyl/AversionsCrown-Tyrant.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain'}} />
                  <CardBody>
                                    <CardTitle>Aversions Crown - Tyrant</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/2" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardImg top src={require("./images/Vinyl/MakeThemSuffer-HowToSurviveAFuneral.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}/>
                  <CardBody>
                    <CardTitle>Make Them Suffer - How To Survive A Funeral</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                    <a href="/product/3" className="btn btn-secondary">Details</a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

            <hr className="my-divider" />

        <section className="new-vinyl">
            <Container>
                <h2>New vinyl</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/Vinyl/Gojira-EnfantSauvage.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Gojira - Enfant Sauvage</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/1" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/Vinyl/Nirvana-InUtero.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Nirvana - In Utero</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/2" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/Vinyl/NormaJean-AllHail.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Norma Jean - All Hail</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/3" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

            <hr className="my-divider" />

        <section className="new-compact-disc">
            <Container>
                <h2>New CD</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/CD/RedHorChiliPeppers-Californication.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Red Hot Chili Peppers - Californication</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/1" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/CD/Metallica-MasterOfPuppets.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Metallica - Masters Of Puppets</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/2" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/CD/TheKillers-HotFuss.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>The Killers - Hot Fuss</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/3" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </section>

            <hr className="my-divider" />

        <section className="used-vinyl">
            <Container>
                <h2>Used vinyl</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/Vinyl/Emarosa-131.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Emarosa - 131</CardTitle>
                                    <CardSubtitle><b>$19.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/1" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                             <CardImg top src={require("./images/Vinyl/BadOmens-FindingGodbeforeGodFindsMe.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Bad Omens - Finding God Before God Finds Me</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/2" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/Vinyl/Bmth-Sempiternal.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                    <CardTitle>Bring Me The Horizon -  Sempiternal</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/3" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </section>

            <hr className="my-divider" />

        <section className="used-compact-disc">
            <Container>
                <h2>Used CDs</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/CD/Fushitsusha-1st.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Fushitsusha - 1st</CardTitle>
                                    <CardSubtitle><b>$99.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/1" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/CD/ThreeDaysGrace-OneX.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Three Days Grace - One-X</CardTitle>
                                    <CardSubtitle><b>$24.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/2" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/CD/FallOutBoys-FromUnderTheCorkTree.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Fall Out Boy - From Under The Cork Tree</CardTitle>
                                    <CardSubtitle><b>$29.99</b></CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/3" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>

            <hr className="my-divider" />

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

