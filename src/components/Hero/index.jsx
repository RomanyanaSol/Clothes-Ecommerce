import React from 'react';
import s from './style.module.css';
import WomanImg from '../../img/woman_hero.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.text}>
          <div className={s.newTrend}>
            <div className={s.dash}></div>New Trend
          </div>
          <h1 className={s.h1}>
            AUTUMN SALE STYLISH <br />
            <span>WOMENS</span>
          </h1>
          <Link to={'/'} className={s.link}>
            Discover More
          </Link>
        </div>
        <div className={s.img}>
          <img src={WomanImg} alt="Woman" />
        </div>
      </div>
    </section>
  )
}
