import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';

const Navvbar = ({ cartItems, toggleCart }) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top"> {/* This line fixes the Navbar */}
            <Container>
                <Navbar.Brand href="/">Foodie</Navbar.Brand>
                <Button variant="outline-primary" onClick={toggleCart}>
                    <BsCart /> {cartItems.length}
                </Button>
            </Container>
        </Navbar>
    );
};

export default Navvbar;
