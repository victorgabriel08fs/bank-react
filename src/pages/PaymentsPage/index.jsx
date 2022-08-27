import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import api from '../../services/api';
import { Table } from 'react-bootstrap';

const PaymentsPage = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.get("payments").then(async (response) => {
            var data = await response.data;
            setPayments(data);
            setLoading(true);
        });
    }, [payments]);

    return (<div>
        <Table className='table-basic' striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Value</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment) => {
                    return (loading ? <CardItem key={payment.id} item={payment} /> : 'Loading...');
                })}
            </tbody>
        </Table>
    </div>);
}

export default PaymentsPage;