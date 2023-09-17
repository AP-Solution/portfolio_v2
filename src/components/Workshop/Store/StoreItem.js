import React, { useState, useEffect } from 'react';

export const StoreItem = ({ product, updateTotalPrice }) => {
  const [count, setCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const cartObject = JSON.parse(localStorage.getItem('cartObject')) || {};
    if (cartObject.hasOwnProperty(product.id)) {
      setCount(cartObject[product.id]);
    }
  }, [product.id]);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateCartObject(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    updateCartObject(count + 1);
  };

  const updateCartObject = (newCount) => {
    const cartObject = JSON.parse(localStorage.getItem('cartObject')) || {};
    if (newCount > 0) {
      cartObject[product.id] = newCount;
    } else {
      delete cartObject[product.id];
    }
    localStorage.setItem('cartObject', JSON.stringify(cartObject));
    updateTotalPrice();
  };

  return (
    <li className="store__item" key={product.id}>
      <div className="store__item-image">
        <img src={product.image} alt={product.title} />
      </div>

      <h3>{product.title}</h3>
      <p>Ціна: ₴{product.price}</p>
      <p>Опис: {product.description}</p>
      <p>Категорія: {product.category}</p>
      <p>Рейтинг: {product.rating.rate}</p>
      <div className="store__item-settings">
        {count > 0 && (
          <div className="store__count-total">Загалом: {(count * product.price).toFixed(2)} ₴</div>
        )}
        <div className="store__count-wrapper">
          <button className="store__count-button" onClick={handleDecrement}>-</button>
          <div className="store__count-output">
            {count} шт
          </div>
          <button className="store__count-button" onClick={handleIncrement}>+</button>
        </div>

        <button className="store__button-buy" onClick={() => {
          const cartObject = JSON.parse(localStorage.getItem('cartObject')) || [];
          const { id } = product;
          cartObject[id] = count;
          localStorage.setItem('cartObject', JSON.stringify(cartObject))
        }}>До кошика</button>
      </div>
    </li>
  );
}