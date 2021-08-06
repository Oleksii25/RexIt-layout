import React from 'react';
import { About } from './components/About/About';
import './MiddleSection.scss';

export function MiddleSection() {
  return (
    <section className='middle'>
      <div className='middle__content-wrapper'>
        <About />
      </div>
    </section>
  )
}
