import React, {useState} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import APIURL from '../helpers/environment';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const eye = <FontAwesomeIcon icon={faEye} />;
    const [passwordShow, setPasswordShow] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}user/login`, {
            // fetch ('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: `Bearer ${password}`}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
}

    return(
        <div className="loginform">
            <h1 className="login">Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input type="email" placeholder="Email" className="logemail" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>
                </FormGroup>
                <FormGroup>
                    <Input type={passwordShow ? "text" : "password"} placeholder="Password" className="logpass" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required/>
                    <i className="ilogin" onClick={togglePasswordVisiblity}>{eye}</i>{" "}
                </FormGroup>
                <Button type="submit" className="loginbtn">Login</Button>
            </Form>
        </div>
    )
}

export default Login;