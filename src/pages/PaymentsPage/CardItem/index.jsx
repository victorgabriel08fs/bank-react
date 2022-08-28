import React from 'react';

const CardItem = ({ item }) => {
    return (<tr className='card-item'><td>{item.id}</td><td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.value))}</td><td>{new Date(item.dueDate).toLocaleDateString('pt-BR')+' - '+new Date(item.dueDate).toLocaleTimeString('pt-BR')}</td><td>{item.status === 'REVERSED' ? 'Estornado' : (item.status === 'RECEIVED' ? 'Recebido' : (item.status === 'RECEIVED_OVERDUE' ? 'Recebido com atraso' : (item.status === 'PENDING' ? 'Pendente' : 'Cancelado')))}</td></tr>);
}

export default CardItem;