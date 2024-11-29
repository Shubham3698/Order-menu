import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{width:'100%'}} className="bg-dark text-light py-4">
            <Container>
                <Row className="mb-3">
                    {/* About Section */}
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            Welcome to our restaurant, where we serve delicious and freshly-prepared dishes crafted
                            with passion and love. Join us for an unforgettable dining experience!
                        </p>
                    </Col>

                    {/* Contact Section */}
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><strong>Address:</strong> 123 Foodie St, Foodville</li>
                            <li><strong>Phone:</strong> (123) 456-7890</li>
                            <li><strong>Email:</strong> info@restaurant.com</li>
                        </ul>
                    </Col>

                    {/* Links Section */}
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#menu" className="text-light">Our Menu</a></li>
                            <li><a href="#about" className="text-light">About Us</a></li>
                            <li><a href="#reservations" className="text-light">Reservations</a></li>
                            <li><a href="#contact" className="text-light">Contact</a></li>
                        </ul>
                    </Col>
                </Row>

                {/* Social Media Section */}
                <Row>
                    <Col className="text-center">
                        <h5>Follow Us</h5>
                        <div className="d-flex justify-content-center">
                            <a href="https://facebook.com" className="text-light mx-2" aria-label="Facebook">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-light mx-2" aria-label="Instagram">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-light mx-2" aria-label="Twitter">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://youtube.com" className="text-light mx-2" aria-label="YouTube">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Copyright Section */}
                <Row>
                    <Col className="text-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Restaurant Name. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
