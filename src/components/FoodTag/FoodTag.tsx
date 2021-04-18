import React, { useState } from 'react'
import './FoodTag.scss'
import spaghetti from '../../assets/icons/spaghetti.svg'
import ham from '../../assets/icons/ham.svg'
import carp from '../../assets/icons/carp.svg'
import healthyFood from '../../assets/icons/healthy-food.svg'
import cake from '../../assets/icons/cake.svg'
import sushi from '../../assets/icons/sushi.svg'
import noodles from '../../assets/icons/noodles.svg'
import taco from '../../assets/icons/taco.svg'

const FoodTag: React.FC = () => {
  const [activeEl, setActiveEl] = useState('Pasta');
  const changeActiveEl = (e) => {
    const newActiveName = e.target.getAttribute('alt');
    const newActiveNameCapitalized = newActiveName.substr(0, 1).toUpperCase() + newActiveName.slice(1);

    document.getElementsByClassName('food-tag__list__item active')[0].classList.remove('active');
    e.currentTarget.classList.add('active');
    setActiveEl(newActiveNameCapitalized);
  }

  return (
    <div className="food-tag">
      <div className="food-tag__list">
        <div onClick={changeActiveEl} className="food-tag__list__item active"><span><img src={spaghetti} alt="pasta" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={ham} alt="carne" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={carp} alt="pesce" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={healthyFood} alt="verdure" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={cake} alt="dolci" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={sushi} alt="giapponese" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={noodles} alt="cinese" /></span></div>
        <div onClick={changeActiveEl} className="food-tag__list__item"><span><img src={taco} alt="messicano" /></span></div>
      </div>

      {activeEl &&
        <h2>{activeEl}</h2>
      }
    </div>
  );
}

export default FoodTag;