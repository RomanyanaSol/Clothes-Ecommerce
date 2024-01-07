import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import Product from '../../components/Product';
import Hero from '../../components/Hero';

import s from './style.module.css';

export default function Home() {

  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(item => item.category === "men's clothing" || item.category === "women's clothing")


  return (
    <div>
      <Hero />
      <section className={s.margTop}>
        <div className={s.container}>
          <div className={s.grid}>
            {
              filteredProducts.map(product => <Product key={product.id} product={product} />)
            }
          </div>
        </div>
      </section>
    </div>
  )
}
