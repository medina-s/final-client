import React, {useState} from 'react';
import {Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // fetch(`${APIURL}user/register`, {
            fetch(`http://localhost:3000/user/register`, {
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

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <div className="signupform">
        <Button onClick={toggle} className="signuppopbtn">Sign up!</Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader className="signuphead">Sign up for an account!</ModalHeader>
            <ModalBody className="signuptest">
                <div className="signuppopup">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Input type="email" placeholder="Email" className="registeremail" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>
                    </FormGroup>
                    <FormGroup>
                    <Input placeholder="Password" className="registerpass" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required/>
                    </FormGroup>
                    <Button type="submit" className="signupbtn" >Sign Up!</Button>
                </Form>
                </div>
            </ModalBody>
        </Modal>
        </div>
    )
}

export default Register;