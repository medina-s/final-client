import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Register from './Register';

const Auth = (props) => {
    return(
        <div className="background">
        <Container className="auth-container">
            <Row>
                <Col md="6" className="auth-container1">
                    <Login updateToken={props.updateToken}/>   
                    <Register updateToken={props.updateToken}/>
                </Col>
                {/* <Col md="6" className="login-col">
                    <Login updateToken={props.updateToken}/>
                </Col> */}
            </Row>
        </Container>
        </div>
    )
}

export default Auth;