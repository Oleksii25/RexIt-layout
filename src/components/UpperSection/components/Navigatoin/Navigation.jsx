import React, { useState, useEffect } from 'react';
import './Navigation.scss';

export function Navigation() {
const menuItems=['HOME', 'ABOUT US', 'CONTACTS', 'CHECKOUT', 'ACCOUNT'];
const [windowWidth, setWindowWidth] = useState(0);

useEffect(() => {
  setWindowWidth(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })
}, [])

  const [toggler, setToggler] = useState(false);

  if(windowWidth > 800 && toggler) {
    setToggler(false)
  }

  return (
    <nav className='nav' name='navigation'>
      <button 
        className={toggler 
          ? 'nav__icon--active'
          : 'nav__icon'
        }
        onClick={() => setToggler((prevToogler) => !prevToogler)}
      ></button>
      <ul 
        className={
          windowWidth > 800
            ? 'nav__list'
            : 'nav__list--width800'
        }
        style={
          toggler
            ? {zIndex: '2'}
            : {zIndex: '-2'}
        }
      >
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
