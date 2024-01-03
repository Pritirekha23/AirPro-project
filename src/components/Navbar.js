import React from 'react';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import Grid from '@mui/system/Unstable_Grid';
import '../style/Navbar.css';

const Navbar = () => {
  const linkStyle = {
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      // fontSize:"100px"
    },
  };
  const navbarStyle = {
    minHeight: '70px',
  }


  return (
    <Grid>
      <BootstrapNavbar bg="dark" className="fixed-top " expand="lg" variant="dark" style={navbarStyle}>
        <span className="mx-4"></span>
        <BootstrapNavbar.Brand href="#home" className='ml-4'><span style={{ color: 'white' }}>AIR PRO</span></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <span className="mx-5"></span>
          <Nav className="mr-auto navbar-nam">
            <Nav.Link href="/" style={linkStyle} >Home</Nav.Link>
            <span className="mx-5"></span>
            {/* <Nav.Link href="/Menu" style={linkStyle} >Menu</Nav.Link> */}

            <NavDropdown title="Menu" id="basic-nav-dropdown" className="menu-dropdown">

              <NavDropdown.Item href="/Reciprocating Air Compressor" className='btn-group dropend'>Reciprocating Air Compressor
                <NavDropdown>
                  <NavDropdown.Item href="/ReciprocatingAirCompressor/subpage1">Subpage 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page1/subpage2">Subpage 2</NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>

              <NavDropdown.Item href="#Ingersoll Rand Type 30 Parts">Ingresoll Rand Type 30 Parts</NavDropdown.Item>
              <NavDropdown.Item href="#Ingresoll Rand ESV Parts">Ingresoll Rand ESV Parts</NavDropdown.Item>
              <NavDropdown.Item href="#Ingresoll Rand Type 30 NL Parts">Ingresoll Rand Type 30 NL Parts</NavDropdown.Item>
              <NavDropdown.Item href="#Ingresoll Rand  Air Compressor Parts">Ingresoll Rand  Air Compressor Parts</NavDropdown.Item>
              <NavDropdown.Item href="#Atlas Copco COmpressor Parts">Atlas Copco COmpressor Parts</NavDropdown.Item>
              <NavDropdown.Item href="#Chicago Pneumatic Air Compressor Parts">Chicago Pneumatic Air Compressor Parts</NavDropdown.Item>
            </NavDropdown>
            <span className="mx-5"></span>
            <Nav.Link href="/AboutUs" style={linkStyle} >AboutUs</Nav.Link>
            <span className="mx-5"></span>
            {/* <Nav.Link href="/Requestforquotes">Request for quote</Nav.Link> */}
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </Grid>

  );
};

export default Navbar;
