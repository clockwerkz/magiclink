import React from 'react';
import {  Container, Row, Col, Form, Button } from 'react-bootstrap';


const Login = (props) => {
    return (
        <Container>
            <Row>
                <Col sm={{ span: 6, offset: 3 }} className="my-4">
                    <h2>Login Form</h2>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default Login;