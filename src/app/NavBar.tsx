"use client"

import { Navbar, Container } from "react-bootstrap"

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/" >
                    Nextjs 13.4 Image Gallery
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}