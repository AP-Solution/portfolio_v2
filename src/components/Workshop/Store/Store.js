import React, { useEffect, useState } from 'react';
import './Store.css';
import { StoreItem } from './StoreItem';

export const Store = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = () => {
    const cartObject = JSON.parse(localStorage.getItem('cartObject')) || {};
    let total = 0;

    for (const productId in cartObject) {
      const product = fetchedProducts.find((p) => p.id === parseInt(productId));

      if (product) {
        total += product.price * cartObject[productId];
      }
    }

    setTotalPrice(total);
  };

  const updateTotalPriceFromStorage = () => {
    const cartFromStorage = JSON.parse(localStorage.getItem('cartObject'));
    let total = 0;

    for (const productId in cartFromStorage) {
      const product = fetchedProducts.find((p) => p.id === parseInt(productId));
      if (product) {
        total += product.price * cartFromStorage[productId];
      }
    }

    setTotalPrice(total);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => setFetchedProducts(products));
  }, []);

  useEffect(() => {
    updateTotalPriceFromStorage();
  }, [fetchedProducts]);

  return (
    <section className="store">
      <h2 className="store__title">Віртуальний інтернет-магазин</h2>
      <div className="store__wrapper">
        <ul className="store__list">
          {fetchedProducts.map((product) => (
            <StoreItem
              product={product}
              updateTotalPrice={updateTotalPrice}
              key={product.id}
            />
          ))}
        </ul>
        <div>Загалом до сплати: {totalPrice.toFixed(2)} ₴</div>
      </div>
    </section>
  );
}