import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const NavMenuBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className="text-white">Employee Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Stack direction="horizontal" gap={5}>
                            <NavLink
                                to="/home"
                                className="text-decoration-none"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/employee"
                                className="text-decoration-none"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "orange"
                                }}
                            >
                                Employee
                            </NavLink>
                        </Stack>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenuBar;