import React from 'react';

const CardItem = ({ item }) => {
    return (<tr className='card-item'><td>{item.id}</td><td>{item.name}</td><td>{item.cpfCnpj}</td><td>{item.adress}</td><td><a href={'/customers/'+item.id+'/payments'}>{item.payments.length}</a></td></tr>);
}

export default CardItem;