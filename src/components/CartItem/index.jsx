import React, { useContext } from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../../contexts/CartContext';



export default function CartItem({ id, title, image, price, amount }) {

  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className={s.container}>
      <div className={s.subContainer}>
        <Link to={`/product/${id}`}>
          <img src={image} alt="cloth" />
        </Link>
        <div className={s.all}>
          <div className={s.titleIcon} >
            <Link className={s.link} to={`/product/${id}`}>{title}</Link>
            <div>
              <IoMdClose className={s.icon} onClick={() => removeFromCart(id)}/>
            </div>
          </div>
          <div className={s.subFlex}>
            <div className={s.removeAdd}>
              <div className={s.sign} onClick={() => decreaseAmount(id)}><IoMdRemove /></div>
              <div>{amount}</div>
              <div className={s.sign} onClick={() => increaseAmount(id)} ><IoMdAdd /></div>
            </div>
            <div className={s.price}>$ {price}</div>
            <div className={s.finalPrice}>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
