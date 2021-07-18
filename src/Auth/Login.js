import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        const emailcheck = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        event.preventDefault();
        if(email.match(emailcheck)) {
        fetch('http://localhost:3000/user/login', {
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
    else {
        alert('Invalid email address format')
    }
}

    return(
        <div className="forms">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <Label htmlFor="email">Email</Label> */}
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} required/>
                </FormGroup>
                <FormGroup>
                    {/* <Label htmlFor="password">Password</Label> */}
                    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;