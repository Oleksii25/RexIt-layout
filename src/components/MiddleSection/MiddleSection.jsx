import React from 'react';
import { About } from './components/About/About';
import { Constructor } from './components/Constructor/Constructor';
import './MiddleSection.scss';

function MiddleSectionComponent() {
  return (
    <section className='middle'>
      <div className='middle__content-wrapper'>
        <About />
        <Constructor />
      </div>
    </section>
  )
}

export const MiddleSection = React.memo(MiddleSectionComponent);
