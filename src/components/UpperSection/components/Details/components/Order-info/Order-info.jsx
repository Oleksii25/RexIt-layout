import React, { useState } from 'react';
import ing1 from './ingredient1.svg';
import ing2 from './ingredient2.svg';
import ing3 from './ingredient3.svg';
import ing4 from './ingredient4.svg';
import semen from './semen.svg';
import close from './close.svg';
import './Order-info.scss';

export function OrderInfo({ orders, onClick, infoVisible}) {
  console.log(infoVisible)

  return (
    <section className='order-info' style={{display:
      infoVisible
        ? 'block'
        : 'none' 
    }}>
      <button
        type='button'
        className='order-info__button-close'
        onClick={() => { onClick(false) }}
      ></button>
      <div className='order-info__logos'>
        <img src={ing1} alt="first ingredient" className='order-info__logo'/>
        <img src={ing2} alt="second ingredient" className='order-info__logo'/>
        <img src={ing3} alt="third ingredient" className='order-info__logo'/>
        <img src={ing4} alt="fourth ingredient" className='order-info__logo'/>
      </div>
      <ul className='order-info__list'>
        <li className='order-info__item'>
          <img src={semen} alt="semen ico" className='order-info__semen'/>
          <div className='order-info__numbers'>
            <div className='order-info__proportion'>24%</div>
            <div className='order-info__proportion'>24%</div>
            <div className='order-info__proportion'>24%</div>
            <div className='order-info__proportion'>28%</div>
            <div className='order-info__mass'>1.5 kg</div>
            <div className='order-info__price'>83 €</div>
          </div>
          <a href="#" className='order-info__close'>
            <img src={close} alt="close ico"/>
          </a>
        </li>
      </ul>
      <div className='order-info__amount'>
        <span className='order-info__total'>
          TOTAL: 
          <span>
            143 €
          </span>  
        </span>
        <button className='order-info__button-check'>
          CHECKOUT
        </button>
      </div>
    </section>
  )
}
