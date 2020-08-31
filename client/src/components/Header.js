import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const Header = (props) => {
    return (<AuthContext.Consumer>
        {({ login, setLogin }) => (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Magic Link</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link className="nav-link" to="/">Dashboard</Link></Nav.Link>
                </Nav>
                <Button 
                    className="ml-auto"
                    variant="outline-light"
                    onClick={()=>setLogin(!login)}
                >
                    {!login ? "Login":"Logout"}
                </Button>
            </Navbar>)
        }
    </AuthContext.Consumer>)
}


export default Header;