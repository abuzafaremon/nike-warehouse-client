import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Header.css';

const OffCanvas = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar sticky="top" key={expand} bg="dark" expand={expand} className="navbar-dark">
          <Container>
            <Navbar.Brand className='fw-bold' as={Link} to='/' ><span className='text-crimson'>Nike</span> WareHouse</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <span className='text-crimson'>Nike</span> Warehouse
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                  <Nav.Link as={Link} to='/manageInventory'>Manage Inventory</Nav.Link>
                  {user ?
                    <NavDropdown
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item as={Link} to='/myItems'>My items</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/manageItems'>
                        Manage Items
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/addItem'>
                        Add Item <span className='fw-bold'>+</span>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={handleSignOut}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown> :
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default OffCanvas;