import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import api from '../../services/api';

const UserCreatePage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        api.post('users', { name, email, cpfCnpj, password }).then(response => {
            console.log(response);
        })
            .catch(error => {
                console.log(error);
            });
    }

    function handleName(event) {
        const { value } = event.target;
        setName(value);
    }
    function handleEmail(event) {
        const { value } = event.target;
        setEmail(value);
    }
    function handleCpfCnpj(event) {
        const { value } = event.target;
        setCpfCnpj(value);
    }

    function handlePassword(event) {
        const { value } = event.target;

        setPassword(value);
    }

    return (
        <div >
            <header className="">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" value={name} onChange={handleName} type="text" placeholder="Name" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="userEmail" value={email} onChange={handleEmail} type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCpfCnpj">
                        <Form.Label>CPF/CNPJ</Form.Label>
                        <Form.Control name="userCpfCnpj" value={cpfCnpj} onChange={handleCpfCnpj} type="text" placeholder="CPF/CNPJ" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="userPassword" value={password} onChange={handlePassword} type="password" placeholder="Password" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </header>
        </div>
    );
}

export default UserCreatePage;