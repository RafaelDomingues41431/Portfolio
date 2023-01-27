import './Header.css'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand >
                    Rafael Domingues
                </Navbar.Brand>
                <Nav >
                    <Nav.Link as={Link} to="/">About</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header