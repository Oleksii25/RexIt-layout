import React from 'react';
import './PacageMenu.scss';

export function PacageMenu({ changeSize, hidePacageMenu }) {
  return (
    <ul
      className='constructor__pacage-list'
      onClick={() => hidePacageMenu(false)}
    >
      <li
        className='constructor__pacage-item'
        key='small'
        onClick={() => changeSize('small')}
      >
        SMALL PACK
      </li>
      <li
        className='constructor__pacage-item'
        key='medium'
        onClick={() => changeSize('medium')}
      >
        MEDIUM PACK
      </li>
      <li 
        className='constructor__pacage-item'
        key='large'
        onClick={() => changeSize('large')}
      >
        LARGE PACK
      </li>
    </ul>
  )
}
