import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

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
    // Implement search functionality here, e.g., navigate to search results page.
    // You can use this.state.searchQuery to fetch relevant products.
  };

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">My E-Commerce Store</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/cart">Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/account">Account</NavLink>
              </NavItem>
            </ul>
            <div className="ml-auto">
              <div className="input-group">
                <Input
                  type="text"
                  placeholder="Search for products"
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
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
