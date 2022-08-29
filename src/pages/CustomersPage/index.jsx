import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import api from '../../services/api';
import { Table } from 'react-bootstrap';
import {
    useParams
} from "react-router-dom";


const CustomersPage = () => {
    const [customers, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    const { id } = useParams();

    useEffect(() => {
        api.get("users/" + id + "/customers").then(async (response) => {
            var data = await response.data;
            setUsers(data);
            setLoading(true);
        });
    }, [customers]);

    return (<div>
        <Table striped bordered hover className='table-basic'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPF/CNPJ</th>
                    <th>Adress</th>
                    <th>Payments</th>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer) => {
                    return (loading ? <CardItem key={customer.id} item={customer} /> : 'Loading');
                })}
            </tbody>
        </Table>
    </div>);
}

export default CustomersPage;