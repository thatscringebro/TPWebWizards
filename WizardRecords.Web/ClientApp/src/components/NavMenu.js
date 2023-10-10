import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            searchQuery: '',
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleSearchSubmit = () => {
        // TODO: Add search logic here
    };

    render() {
        return (
            <header id="header_container">
                {/*affichage pour bureau / tablettes*/}
                <div class="desktop">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-auto">
                                <NavbarBrand tag={Link} to="/">
                                    <img src="/Images/WizardRecords.png" alt="logo" style={{ maxHeight: '50px', maxWidth: '250px' }} />
                                </NavbarBrand>
                            </div>
                            <div class="col col-lg">
                                <div className="input-group">
                                    <Input
                                        type="text"
                                        placeholder="search products"
                                        value={this.state.searchQuery}
                                        onChange={this.handleSearchChange}
                                    />
                                    <div className="input-group-append">
                                        <Button color="primary" onClick={this.handleSearchSubmit}>
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                        <section className="hero-banner">
                            <Container>
                                <p className="slogan">"From yesterday's vinyls to today's hits."</p>
                            </Container>
                        </section>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/products">Products</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/cart">Cart</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/account">Account</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Navbar>
                </div>
                {/*affichage pour petits écrans*/}
                <div class="mobile">
                    <div class="container">
                        <div class="row justify-content-md-center">
                            <div class="col-md-auto">
                                <NavbarBrand tag={Link} to="/"><img src="/Images/WizardRecords.png" alt="logo" style={{ maxHeight: '50px', maxWidth: '250px' }} /></NavbarBrand>
                            </div>
                            <section className="hero-banner">
                                <Container>
                                    <p className="slogan">"From yesterday's vinyls to today's hits."</p>
                                </Container>
                            </section>
                            <div class="col col-lg">
                                <div className="input-group">
                                    <Input
                                        type="text"
                                        placeholder="search products"
                                        value={this.state.searchQuery}
                                        onChange={this.handleSearchChange}
                                    />
                                    <div className="input-group-append">
                                        <Button color="primary" onClick={this.handleSearchSubmit}>
                                            Search
                                        </Button>
                                    </div>
                                </div>
                                <div id="menu">
                                    <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3" light>
                                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                            <ul className="navbar-nav flex-grow">
                                                <NavItem>
                                                    <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink tag={Link} className="text-light" to="/products">Products</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink tag={Link} className="text-light" to="/cart">Cart</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink tag={Link} className="text-light" to="/account">Account</NavLink>
                                                </NavItem>
                                            </ul>
                                        </Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
