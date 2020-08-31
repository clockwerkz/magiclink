import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import AuthContext from '../context/AuthContext';

const Header = (props) => {
    return (<AuthContext.Consumer>
        {({ login, setLogin }) => (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Magic Link</Navbar.Brand>
                <Button 
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