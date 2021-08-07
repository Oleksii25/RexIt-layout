import React from 'react';
import './RangeInput.scss';
import './SoyRange.scss';
import './SesameRange.scss';
import './WheatRange.scss';
import './CornRange.scss';



export function RangeInput({ icon, name }) {
  return (
    <>
      <img
        src={icon}
        alt={`${name} icon`}
        className='constructor__ingridient-icon'
      />
      <input
        name={name}
        type="range"
        className={`constructor__input constructor__input--${name}`}
        max='100'
        min='0'
        defaultValue='0'
      />
      <span className='constructor__proportion-value'>10%</span>
    </>
    
  )
}
