import React, { useContext } from 'react';
import { BsEyeFill, BsPlus } from 'react-icons/bs';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


export default function Product({ product }) {

  const { id, image, category, title, price } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className={s.group}>
        <div className={s.container}>
          <div>
            <img src={image} alt="cloth" />
          </div>
          <div className={s.contButtons}>
            <button className={s.plus} onClick={() => addToCart(product, id)}>
              <BsPlus />
            </button>
            <Link to={`/product/${id}`} className={s.eye}>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={s.category}>{category}</div>
        <Link className={s.linkT} to={`/product/${id}`}>
          <h2 className={s.title}>{title}</h2>
        </Link>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  )
}
