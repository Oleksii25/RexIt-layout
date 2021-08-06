import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Details } from './components/Details/Details';
import { Navigation } from './components/Navigatoin/Navigation';
import { TasteIt } from './components/TesteIt/TasteIt';
import './UpperSection.scss';

export function UpperSection() {
  return (
    <section className="upper-section">
      <Details />
      <Navigation />
      <TasteIt />
    </section>
  )
}
