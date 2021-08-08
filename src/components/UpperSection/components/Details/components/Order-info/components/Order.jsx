import React from 'react';
import './Order.scss';
import semen from './icons/semen.svg';

export function Order({ order, onClick }) {
  const { soy, sesame, corn, wheat, weight, price } = order;
  return (
    <>
      <img src={semen} alt="semen ico" className='order-info__semen'/>
      <div className='order-info__numbers'>
        <div className='order-info__proportion'>{soy}%</div>
        <div className='order-info__proportion'>{sesame}%</div>
        <div className='order-info__proportion'>{wheat}%</div>
        <div className='order-info__proportion'>{corn}%</div>
        <div className='order-info__weight'>{weight} kg</div>
        <div className='order-info__price'>{price} €</div>
      </div>
      <button
        type='button'
        className='order-info__remove-order'
        onClick={() => onClick(order)}
      >
      </button>
    </>
  )
}
