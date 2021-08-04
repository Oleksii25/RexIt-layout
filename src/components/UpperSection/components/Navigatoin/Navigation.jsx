import React from 'react';
import './Navigation.scss';

export function Navigation() {
const menuItems=['HOME', 'ABOUT US', 'CONTACTS', 'CHECKOUT', 'ACCOUNT']
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {
          menuItems.map(item => (
            <li className='nav__item' key={item}>
              <a href="#" className='nav__link'>
                {item}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
