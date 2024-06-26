import React, { useEffect, useState, useCallback } from 'react';
import styles from './Store.module.css';
import { StoreItem } from './StoreItem';
import iconCart from '../../../images/icon__cart.png';

export const Store = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = useCallback((products = fetchedProducts) => {
    const cartObject = JSON.parse(localStorage.getItem('cartObject')) || {};
    let total = 0;
  
    for (const productId in cartObject) {
      const product = products.find(p => p.id === parseInt(productId));
  
      if (product) {
        total += product.price * cartObject[productId];
      }
    }
  
    setTotalPrice(total);
  }, [fetchedProducts]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        setFetchedProducts(products);
        updateTotalPrice(products);
      });
  }, [updateTotalPrice]);

  return (
    <section className={styles.store}>
      <h2 className={styles.store__title}>Віртуальний інтернет-магазин</h2>
      {fetchedProducts && (
        <div className={styles.store__wrapper}>
          <ul className={styles.store__list}>
            {fetchedProducts.map((product) => (
              <StoreItem
                product={product}
                updateTotalPrice={updateTotalPrice}
                key={product.id}
              />
            ))}
          </ul>
          <div className={styles.store__total_price}>Загалом до сплати: {totalPrice.toFixed(2)} ₴</div>
        </div>
      )}

      <div className={styles.button__purcache}>
        <img src={iconCart} alt="cart_icon" />
      </div>
    </section>
  );
};
