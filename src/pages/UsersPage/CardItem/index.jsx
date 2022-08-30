import React, { useEffect, useState } from 'react';

const CardItem = ({ item }) => {

    return (<tr className='card-item'><td>{item.id}</td><td>{item.name}</td><td>{item.cpfCnpj}</td><td><a className="link" href={'/users/' + item.id + '/customers'}>{item.customers.length}</a></td><td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.account.balance))}</td></tr>);
}

export default CardItem;