import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import api from '../../services/api';
import { Table } from 'react-bootstrap';


const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.get("users").then(async (response) => {
            var data = await response.data;
            setUsers(data);
            setLoading(true);
        });
    }, [users]);

    return (<div>
        <Table striped bordered hover className='table-basic'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPF/CNPJ</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((user) => {
                        return (loading?<CardItem key={user.id} item={user} />:'Loading');
                    })}
            </tbody>
        </Table>
    </div>);
}

export default UsersPage;