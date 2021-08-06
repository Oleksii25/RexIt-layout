import React from 'react';
import './TasteIt.scss';

export function TasteIt() {
  return (
    <section className='tasty'>
      <h1 className='tasty__title'>
        MOSTLY TASTES WITH FRESHES
      </h1>
      <article className='tasty__content'>
        <p className='tasty__text'>
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet,
        </p>
      </article>
      <button type='button' className='tasty__button'> TASTE IT</button>
    </section>
  )
}
