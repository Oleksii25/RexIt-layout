import React from 'react';
import './styles/index.scss'
import { UpperSection } from './components/UpperSection/UpperSection'
import { MiddleSection } from './components/MiddleSection/MiddleSection'
import { BottomSection } from './components/BottomSection/BottomSection'

function App() {
  return (
    <>
      <UpperSection />
      <MiddleSection />
      <BottomSection />
    </>
  )
}

export default App
