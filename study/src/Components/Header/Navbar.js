import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavbarScroll(props) {
    return (
        <Navbar
            expand="lg"
            bg={props.darkMode ? 'dark' : 'light'}
            data-bs-theme={props.darkMode ? 'dark' : 'light'}
            className="border-bottom"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    {props.title}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/about">
                            {props.aboutTitle}
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            {props.homeTitle}
                        </Nav.Link>
                    </Nav>
                    <label className="ui-switch mx-2" htmlFor="darkModeToggle">
                        <input
                            type="checkbox"
                            id="darkModeToggle"
                            onClick={props.toggleDarkMode}
                        />
                        <div className="slider">
                            <div className="circle" />
                        </div>
                    </label>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant={props.darkMode ? 'secondary' : 'light'}>
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

NavbarScroll.propTypes = {
    title: PropTypes.string,
    aboutTitle: PropTypes.string,
    homeTitle: PropTypes.string,
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};

// Default props to handle optional properties
NavbarScroll.defaultProps = {
    title: 'Navbar',
    aboutTitle: 'About',
    homeTitle: 'Home',
};
