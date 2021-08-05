import React, { useState } from 'react';
import { OrderInfo } from './components/Order-info/Order-info';
import icon from './semen.png'
import './Details.scss'

export function Details() {
  const [orders, setOrders] = useState(1);
  const [infoVisible, setInfoVisible] = useState(true);
  console.log(infoVisible)

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
            {!orders || <div className='upper-info__orders-amount'>
              { orders }
          </div>}
        </div>
        <span className='upper-info__logo'>
          Cracker
        </span>
        <span className='upper-info__total '>
          TOTAL: 
        </span>
        <span className='upper-info__amount'>143 €</span> 
        <a
          type='button'
          className='upper-info__details'
          onClick={()=> setInfoVisible(true)}
        >
          DETAILS
        </a>
      </div>
    </div>
  )
}
