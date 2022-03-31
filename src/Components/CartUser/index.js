import React from 'react';
import './style.scss';

export default function CartUser({ user, userId, handlerChange }) {
  const { photo, name, id, company: { name: companyName } } = user;
  return (
    <div className={`${userId === id ? 'user-item_checked' : ""} user-item`} onClick={() => handlerChange(id)}>
      <img className='user-item__img' src={photo} alt={name}></img>
      <div className='user-item__name'>{name}</div>
      <div className='user-item__companyName'>{companyName}</div>
    </div>
  );
};

