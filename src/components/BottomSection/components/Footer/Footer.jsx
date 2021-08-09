import React from 'react';
import './Footer.scss';
import { Phone } from './components/Phone/Phone';
import { Address } from './components/Address/Address';
import { Share } from './components/Share/Share';

export function FooterComponent() {
  return (
    <footer className='footer'>
      <Phone />
      <Address />
      <Share />
    </footer>
  )
}

export const Footer = React.memo(FooterComponent);
