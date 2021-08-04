import React from 'react';
import './Details.scss'

export function Details() {
  return (
    <div className='upper-info'>
      <div className='upper-info__wrapper'>
        <span className='upper-info__total '>
          TOTAL: 
        </span>
        <span className='upper-info__amount'>143$</span> 
        <div className='upper-info__details' onClick={()=> console.log('win')}>
          DETAILS
        </div>
      </div>
    </div>
  )
}
