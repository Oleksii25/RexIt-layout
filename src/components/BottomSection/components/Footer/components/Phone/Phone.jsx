import React from 'react';
import './Phone.scss';

export function Phone() {
  return (
    <article className='phone'>
      <span  className="phone__icon">
        PHONE
      </span>
      <a href="tel:+439873456782" className="phone__link">
        +43 ( 987 ) 345 - 6782
      </a>
    </article>
  )
}
