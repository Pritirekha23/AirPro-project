import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <div>
      <BootstrapNavbar bg="light" expand="lg">
        <BootstrapNavbar.Brand href="#home"><span>PFC</span></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Menu">Menu</Nav.Link>
          {/* <Nav.Link href="/Requestforquotes">Request for quote</Nav.Link> */}
        </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>

      
    </div>
  );
};

export default Navbar;
