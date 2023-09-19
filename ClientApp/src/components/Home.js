import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';


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
                  <CardImg top src={require("./images/Vinyl/Fushitsusha-1st.png")} alt="Product 2" style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain'}} />
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

            {/* Ajout de la section du formulaire */}
            <section className="contact-form">
                <Container>
                    <h2>Contact Us</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter your name" value={this.state.formData.name} onChange={this.handleInputChange} />
                            {this.state.errors.name && <Alert color="danger">{this.state.errors.name}</Alert>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" value={this.state.formData.email} onChange={this.handleInputChange} />
                            {this.state.errors.email && <Alert color="danger">{this.state.errors.email}</Alert>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="textarea" name="description" id="description" placeholder="Describe your request" value={this.state.formData.description} onChange={this.handleInputChange} />
                            {this.state.errors.description && <Alert color="danger">{this.state.errors.description}</Alert>}
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
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

