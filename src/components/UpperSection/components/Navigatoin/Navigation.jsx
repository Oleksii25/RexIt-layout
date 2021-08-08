import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export function Navigation() {
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
    <nav
      className='nav'
      name='navigation'
      id='HOME'
      
    >
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
        <li className='nav__item'>
          <NavLink
            to='/'
            exact
            className='nav__link'
            activeClassName='nav__link--active'
          >
            HOME
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='/ABOUT US'
            exact
            className='nav__link'
            activeClassName='nav__link--active'
          >
            ABOUT US
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            to='/CONTACTS'
            exact
            className='nav__link'
            activeClassName='nav__link--active'
          >
            CONTACTS
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            exact
            to={{
              pathname: '/CHECK',
              search: 'address',
              hash: '#CONTACTS',
              state: {here: true}
            }}
            className='nav__link'
            activeClassName='nav__link--active'
          >
            CHECKOUT
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            exact
            to='/SHARE'
            href='#CONTACTS'
            className='nav__link'
            activeClassName='nav__link--active'
          >
            ACCOUNT
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
