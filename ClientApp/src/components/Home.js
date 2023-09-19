import React, { Component } from 'react';
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
            <a href="/products" className="btn btn-primary">Shop Now</a>
          </Container>
        </section>

            <hr className="my-divider" />   

        <section className="featured-products">
          <Container>
            <h2>Featured Products</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <CardImg top src={require("./images/CD/Essenger-AfterDark.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}/>
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
                    <CardImg top src={require("./images/Vinyl/AversionsCrown-Tyrant.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain'}} />
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
                  <CardImg top src={require("./images/Vinyl/MakeThemSuffer-HowToSurviveAFuneral.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }}/>
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

            <hr className="my-divider" />

        <section className="new-vinyl">
            <Container>
                <h2>New vinyl</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/Vinyl/Gojira-EnfantSauvage.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                            <CardImg top src={require("./images/Vinyl/Nirvana-InUtero.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                            <CardImg top src={require("./images/Vinyl/NormaJean-AllHail.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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

            <hr className="my-divider" />

        <section className="new-compact-disc">
            <Container>
                <h2>New CD</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/CD/Essenger-AfterDark.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                                <CardImg top src={require("./images/CD/Metallica-MasterOfPuppets.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                                <CardImg top src={require("./images/CD/TheKillers-HotFuss.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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

            <hr className="my-divider" />

        <section className="used-vinyl">
            <Container>
                <h2>Used vinyl</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                                <CardImg top src={require("./images/Vinyl/Emarosa-131.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                             <CardImg top src={require("./images/Vinyl/BadOmens-FindingGodbeforeGodFindsMe.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                            <CardImg top src={require("./images/Vinyl/Bmth-Sempiternal.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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

            <hr className="my-divider" />

        <section className="used-compact-disc">
            <Container>
                <h2>Used CDs</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/CD/Fushitsusha-1st.png")} alt="Product 1" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
                            <CardBody>
                                <CardTitle>Product 1</CardTitle>
                                <CardSubtitle>$99.99</CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                                <a href="/product/1" className="btn btn-secondary">Details</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardImg top src={require("./images/CD/ThreeDaysGrace-OneX.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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
                                <CardImg top src={require("./images/CD/FallOutBoys-FromUnderTheCorkTree.png")} alt="Product 3" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain' }} />
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

