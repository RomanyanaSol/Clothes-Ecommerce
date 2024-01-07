import React from 'react';
import s from './style.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <p className={s.pCopyright}>Roman Solovey<br /> solovro31@gmail.com</p>
      </div>
    </footer>
  )
}
