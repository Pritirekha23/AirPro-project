import React from 'react';
import { Navbar as BootstrapNavbar, Nav , NavDropdown} from 'react-bootstrap';
 
const Navbar = () => {

  const linkStyle = {
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
   
    },
  };

  return (
    <div>
      <BootstrapNavbar bg="secondary"  className="fixed-top ">
        <BootstrapNavbar.Brand href="#home" className='ml-4'><span style={{ color: 'white' }}>AIR PRO</span></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link href="/" style={linkStyle}>Home</Nav.Link>
          {/* <Nav.Link href="/Menu" style={linkStyle }>Menu</Nav.Link> */}
          <NavDropdown title="Menui" id="basic-nav-dropdown"  className="menu-dropdown">
              <NavDropdown.Item href="#notebook">Notebook</NavDropdown.Item>
              <NavDropdown.Item href="#pen">Pen</NavDropdown.Item>
              <NavDropdown.Item href="#pencil">Pencil</NavDropdown.Item>
              <NavDropdown.Item href="#eraser">Eraser</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/AboutUs" style={linkStyle }>AboutUs</Nav.Link>

          {/* <Nav.Link href="/Requestforquotes">Request for quote</Nav.Link> */}
        </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>

      
    </div>
  );
};

export default Navbar;
