import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Register from './Register';

const Auth = (props) => {
    return( // Register is below that way Login sits on top
        <div className="background">
        <Container className="auth-container">
            <Row>
                <Col md="6" className="auth-container1">
                    <Login updateToken={props.updateToken}/>   
                    <Register updateToken={props.updateToken}/> 
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;