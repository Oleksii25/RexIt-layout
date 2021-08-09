import React from 'react';
import { Details } from './components/Details/Details';
import { Navigation } from './components/Navigatoin/Navigation';
import { TasteIt } from './components/TesteIt/TasteIt';
import './UpperSection.scss';

function UpperSectionComponent() {
  return (
    <section className="upper-section">
      <Details />
      <Navigation />
      <TasteIt />
    </section>
  )
}

export const UpperSection = React.memo(UpperSectionComponent);
