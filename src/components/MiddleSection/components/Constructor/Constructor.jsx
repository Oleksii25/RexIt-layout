import React,{ useState } from 'react';
import { RangeInput} from './components/RangeInputs/RangeInput';
import { PacageMenu } from './components/PacageMenu/PacageMenu';
import './Constructor.scss';
import soy from './components/icons/soybean.svg';
import sesame from './components/icons/sesame.svg';
import wheat from './components/icons/wheat.svg';
import corn from './components/icons/corn.svg';
import pacage from './pacage.svg';

export function Constructor() {
  const[translate, settranslate] = useState(100);
  console.log(translate);
  return (
    <section className='constructor'>
      <h2  className='constructor__title'>
        CRACKER CONSTRUCTOR
      </h2>
      <span className='constructor__value'>
        CURRENT VALUE: <span className='constructor__amount'>143€</span>
      </span>
      <ul className='constructor__range-list' >
        <li className='constructor__item'>
          <RangeInput name='soy' icon={soy}/>
        </li>
        <li className='constructor__item'>
          <RangeInput name='sesame' icon={sesame}/>
        </li>
        <li className='constructor__item'>
          <RangeInput name='wheat' icon={wheat}/>
        </li>
        <li className='constructor__item'>
          <RangeInput name='corn' icon={corn}/>
        </li>
      </ul>
      <div className='constructor__pacage-wrapper'>
        <img
          src={pacage}
          alt="pacage icon"
          className='constructor__pacage-icon'
        />
        <button
          className='constructor__pacage-button'
          type='button'
        >
          CHOOSE YOUR PACK
        </button>
        <PacageMenu />
      </div>
      <div className='constructor__buttons'>
        <button
          type='button'
          className='constructor__add-button'
          onMouseOver={() => settranslate(0)}
          
        >
        </button>
        <button
          type='button'
          className='constructor__hidden-button'
          onMouseOut={() => settranslate(102)}
          style={{transform: `translate(${translate}%)`}}
        >
          ADD TO CART
        </button>
      </div>
    </section>
  )
}
