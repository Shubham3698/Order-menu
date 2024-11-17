import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa'; // Heart icon

const Navvbar = ({ cartItems, toggleCart }) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="/">Foodie</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-primary" onClick={toggleCart} className="heart-btn">
                    <FaHeart className="animated-heart" /> {cartItems.length}
                </Button>
            </Container>
        </Navbar>
    );
};

export default Navvbar;
