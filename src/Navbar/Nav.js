import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './image/asd-removebg-preview.png'; // Import the Netflix logo image
import './nav.css';

function Navb() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} alt="asd-removebg-preview.png" className="logo" style={{ width: '110px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ fontSize: '18px' }}>Home</Nav.Link>
            <Nav.Link href="/fav" style={{ fontSize: '18px' }}>Favorite movie</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown" style={{ fontSize: '18px' }}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Historical</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Family</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navb;