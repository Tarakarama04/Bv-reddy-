import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'

function NavBar() {
  return (  
    <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
      <Container>
        <img src='logo192.png' alt='logo'/>
        
        <Navbar.Brand >B.V Reddy School</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div > 
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar