import React from 'react';
import { Footer } from './components/Footer/Footer';
import './BottomSection.scss';

function BottomSectionComponent() {
  return (
    <section className='bottom'>
      <Footer />
    </section>
  )
}

export const BottomSection = React.memo(BottomSectionComponent);
