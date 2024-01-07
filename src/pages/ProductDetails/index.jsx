import React, { useContext, useEffect } from 'react';
import s from './style.module.css';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';


export default function ProductDetails() {

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find(item => item.id === +id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!product) {
    return <section className={s.loading}>Loading...</section>
  }

  const { title, price, description, image } = product;

  const shortenText = (description, maxLength) =>
    description.length > maxLength ? description.slice(0, maxLength) + '...' : description;



  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.marginB}>
          <img src={image} alt="" className={s.image} />
        </div>
        <div className={s.flexCol}>
          <h1 className={s.h1}>{title}</h1>
          <div className={s.price}>
            $ {price}
          </div>
          <p className={s.description}>{shortenText(description, 200)}</p>
          <button
            className={s.button}
            onClick={() => addToCart(product, product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </section>
  )
}
