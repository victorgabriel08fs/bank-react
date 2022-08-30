import React from 'react';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import api from '../../services/api';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from "react-router-dom";

const RateCreatePage = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    const [taxa, setTaxa] = useState(1);

    async function handleSubmit(e) {
        e.preventDefault();

        api.post('configs/rates', { value: taxa }).then(response => {
            console.log(response);
        })
            .catch(error => {
                console.log(error);
            });
    }

    function handleTaxa(event) {
        const { value } = event.target;
        setTaxa(value);
    }

    return (
        <div >
            <header className="">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Taxa</Form.Label>
                        <Form.Control name="taxaName" value={taxa} onChange={handleTaxa} type="number" placeholder="Taxa" />
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

export default RateCreatePage;