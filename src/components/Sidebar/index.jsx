import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import { SidebarContext } from '../../contexts/SidebarContext';
import s from './style.module.css'
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';


export default function Sidebar() {

  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  return (
    <div className={isOpen ? s.contOpen : s.contClose}>
      <div className={s.container}>
        <p className={s.pBag}>
          Shopping Bag ({itemAmount})
        </p>
        <div onClick={handleClose}>
          <IoMdArrowForward className={s.arrow} />
        </div>
      </div>
      <div className={s.cart}>
        {
          cart.map(item => <CartItem key={item.id} {...item} />)
        }
      </div>
      <div className={s.totalTrash}>
        <div className={s.fontTotal}>
          <span className={s.fontMarg}>Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
        <div className={s.trash} onClick={clearCart}>
          <FiTrash2 />
        </div>
      </div>
      <div className={s.linkFlex}>
        <Link className={s.link1}>View cart</Link>
        <Link className={s.link2}>Checkout</Link>
      </div>
    </div>
  )
}
