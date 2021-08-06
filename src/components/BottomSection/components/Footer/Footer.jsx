import React from 'react';
import './Footer.scss';
import { Phone } from './components/Phone/Phone';
import { Address } from './components/Address/Address';
import { Share } from './components/Share/Share';

export function Footer() {
  return (
    <footer className='footer'>
      <Phone />
      <Address />
      <Share />
    </footer>
  )
}
