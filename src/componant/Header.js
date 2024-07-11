import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css"

function Section() {
  return (
    <Navbar collapseOnSelect expand="lg" className="section">
      <Container >
        
        <Navbar.Brand href="#home">Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
          <Nav>
            <button>Signin</button>
           
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title="English" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
        
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Section;