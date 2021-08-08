import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderInfo } from './components/Order-info/Order-info.jsx';
import icon from './icons/semen.png'
import './Details.scss'

export function Details() {
  const orders = useSelector(state => state.orders.orders);

  const totalPrice = orders.reduce(
    (totalPrice,currentOrder) => totalPrice + currentOrder.price, 0);

  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <div className='upper-info'>
      <div className='upper-info__wrapper'>
        <OrderInfo
          onClick={setInfoVisible}
          infoVisible={infoVisible}
        />
        <div className='upper-info__orders'>
          <img
              src={ icon }
              alt="semen-icon"
              className='upper-info__icon'
            />
            {!orders.length || <div className='upper-info__orders-amount'>
              { orders.length }
          </div>}
        </div>
        <span className='upper-info__logo'>
          Cracker
        </span>
        <span className='upper-info__total '>
          TOTAL: 
        </span>
        <span className='upper-info__amount'>{totalPrice} €</span> 
        <button
          type='button'
          className='upper-info__details'
          onMouseOver={()=> setInfoVisible(true)}
        >
          DETAILS
        </button>
      </div>
    </div>
  )
}
