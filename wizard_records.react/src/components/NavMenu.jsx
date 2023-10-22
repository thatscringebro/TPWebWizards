import React, { useState } from 'react';
import { Container, Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NavMenu.css';

const SearchBar = ({ searchQuery, handleSearchChange, handleSearchSubmit }) => (
    <Container className="search">
        <Input
            className="bar"
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={handleSearchChange}
        />
        <Button className="button" onClick={handleSearchSubmit}>
            Search
        </Button>
    </Container>
);

const NavigationLinks = () => (
    <ul className="navigation">
        {['/', '/products', '/cart', '/account'].map((path, index) => {
            const labels = ['Home', 'Products', 'Cart', 'Account'];
            return (
                <NavItem className='link' key={index}>
                    <NavLink tag={Link} className="text-light" to={path}>{labels[index]}</NavLink>
                </NavItem>
            );
        })}
    </ul>
);

const DesktopView = ({ searchQuery, handleSearchChange, handleSearchSubmit, collapsed, toggleNavbar }) => (
    <Container className="container-fluid">
         <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/images/logo/WizardRecords.png")} alt="logo" style={{ maxHeight: '50px', maxWidth: '250px' }} />
                    </NavbarBrand>
                </div>
                <div className="col col-lg">
                    <SearchBar 
                        searchQuery={searchQuery} 
                        handleSearchChange={handleSearchChange} 
                        handleSearchSubmit={handleSearchSubmit} 
                    />
                </div>
            </div>
           
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
            <section className="hero-banner">
                <Container>
                    <p className="slogan">"From yesterday's vinyls to today's hits."</p>
                </Container>
            </section>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                <NavigationLinks />
            </Collapse>
        </Navbar>
    </Container>
);

const MobileView = ({ searchQuery, handleSearchChange, handleSearchSubmit, collapsed, toggleNavbar }) => (
    <div className="mobile">
        <Container>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <NavbarBrand tag={Link} to="/">
                        <img src={require("../assets/images/logo/WizardRecords.png")} alt="logo" style={{ maxHeight: '50px', maxWidth: '250px' }} />
                    </NavbarBrand>
                </div>
                <div className="col col-lg">
                    <SearchBar 
                        searchQuery={searchQuery} 
                        handleSearchChange={handleSearchChange} 
                        handleSearchSubmit={handleSearchSubmit} 
                    />
                </div>
            </div>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm box-shadow mb-3" light>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                    <NavigationLinks />
                </Collapse>
            </Navbar>
        </Container>
    </div>
);

const NavMenu = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = () => {
        navigate(`/search?query=${searchQuery}`);
    };

    return (
        <header className="header">
            <DesktopView 
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                collapsed={collapsed}
                toggleNavbar={toggleNavbar}
            />
            {/* <MobileView 
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                handleSearchSubmit={handleSearchSubmit}
                collapsed={collapsed}
                toggleNavbar={toggleNavbar}
            /> */}
        </header>
    );
}

export default NavMenu;