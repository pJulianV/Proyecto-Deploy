import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom';

export const NavBarComp = () => {

    return(
    <>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as = {Link} to = {"/"}> MUNDIAL DE FUTBOL </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/login"}>LOGIN</Nav.Link>
            <Nav.Link as = {Link} to = {"/create"}>LOGIN UP</Nav.Link>
            <NavDropdown title="EVENTOS DEPORTIVOS" id="collasible-nav-dropdown">
              <NavDropdown.Item as = {Link} to = {"/regevento"}>CREAR</NavDropdown.Item>
              <NavDropdown.Item as = {Link} to = {"/shevento"}>
                MOSTRAR EVENTOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as = {Link} to = {"/users"}>USUARIOS</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              HELP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet>

        </Outlet>
    </section>

    </>

    )


}

export default NavBarComp