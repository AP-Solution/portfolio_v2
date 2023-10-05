import React, { useState, useEffect } from 'react';
import addToCartIcon from '../../../images/icon__add-to-cart.png';
import styles from './Store.module.css';

export const StoreItem = ({ product, updateTotalPrice }) => {
  const initialCount = JSON.parse(localStorage.getItem('cartObject'))[product.id] || 0;
  const [count, setCount] = useState(initialCount);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const cartObject = JSON.parse(localStorage.getItem('cartObject')) || {};
    if (count > 0) {
      cartObject[product.id] = count;
    } else {
      delete cartObject[product.id];
    }
    localStorage.setItem('cartObject', JSON.stringify(cartObject));
    updateTotalPrice();
  }, [count]);

  return (
    <li className={styles.store__item}>
      <div className={styles.store__item_image}>
        <img src={product.image} alt={product.title} className={styles.store__item_img} />
      </div>
      <h3 className={styles.store__item_title}>{product.title}</h3>
      <p className={styles.store__item_price}>₴{product.price}</p> {/* Darkened the yellow for a richer appearance */}
      {/* <p className="">Опис: {product.description}</p> */}
      {/* <p className="">Категорія: {product.category}</p> */}
      {/* <p className="">Рейтинг: {product.rating.rate}</p> */}
      <div className={styles.store__item_count}>
        {count ? <button className={styles.store__item_count_decrement} onClick={handleDecrement}>-</button> : <div></div>}
        <div className="store__count-output">
          {count ? `${count} шт` : <img src={addToCartIcon} className="" />}
        </div>
        <button className={styles.store__item_count_increment} onClick={handleIncrement}>+</button>
      </div>
    </li>
  );
};
