import React from 'react';
import './Share.scss';

export function Share() {
  return (
    <article className='share'>
      <span className='share__icon'>
        SHARE US
      </span>
      <a
        name='pinterest'
        href="https://www.pinterest.com"
        target='_blank'
        rel='noreferrer'
        className='share__link share__link--pr'
      >
      </a>
      <a
        name='facebook'
        href="https://www.facebook.com"
        target='_blank'
        rel='noreferrer'
        className='share__link share__link--fb'
      >
      </a>
      <a
        name='google'
        href="https://www.google.com"
        target='_blank'
        rel='noreferrer'
        className='share__link share__link--gl'
      >
      </a>
    </article>
  )
}
