import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import s from './style.module.css';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';

export default function Header() {

  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isActive ? s.header : s.header2}>
      <div className={s.container}>
        <Link to={'/'}>
          <div>
            <img src={Logo} alt="Logo" className={s.logo} />
          </div>
        </Link>
        <div className={s.contBag} onClick={() => setIsOpen(!isOpen)}>
          <BsBag className={s.bag} />
          <div className={s.itemAmount}>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}
