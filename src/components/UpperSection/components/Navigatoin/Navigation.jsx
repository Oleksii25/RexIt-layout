import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import cn from 'classnames'
import './Navigation.scss';

export function Navigation() {
const [windowWidth, setWindowWidth] = useState(0);
const [toggler, setToggler] = useState(false);

useEffect(() => {
  setWindowWidth(window.innerWidth)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
  })
}, [])

  if(windowWidth > 800 && toggler) {
    setToggler(false)
  }

  const location = useLocation();
  console.log(location)
  return (
    <nav
      className='nav'
      name='navigation'
      id='home'
    >
      <button 
        className={cn({
          'nav__icon--active': toggler,
          'nav__icon': !toggler,
        })}
        onClick={() => setToggler((prevToogler) => !prevToogler)}
      ></button>
      <ul 
        className={cn({
          'nav__list': windowWidth > 800,
          'nav__list--width800': windowWidth < 800,
        })}
        style={
          toggler
            ? {display: 'block'}
            : {display: 'none'}
        }
      >
        <li className='nav__item'>
          <HashLink
            to='#home'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#home')
                || location.hash.length === 0,
            })}
            onClick={() => setToggler(false)}
          >
            HOME
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#about us'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#about us'),
            })}
            onClick={() => setToggler(false)}
          >
            ABOUT US
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#contacts'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#contacts'),
            })}
            onClick={() => setToggler(false)}
          >
            CONTACTS
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#constructor'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#constructor'),
            })}
            onClick={() => setToggler(false)}
          >
            CHECKOUT
          </HashLink>
        </li>
        <li className='nav__item'>
          <HashLink
            to='#share'
            className={cn('nav__link',{
              'nav__link--active': location.hash.includes('#share'),
            })}
            onClick={() => setToggler(false)}
          >
            ACCOUNT
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}
