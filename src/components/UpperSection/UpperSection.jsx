import React from 'react';
import { Details } from './components/Details/Details';
import { Navigation } from './components/Navigatoin/Navigation';
import './UpperSection.scss';

export function UpperSection() {
  return (
    <section className="upper-section">
      <Details />
      <Navigation/>
    </section>
  )
}
