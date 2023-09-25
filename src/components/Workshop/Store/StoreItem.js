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
        <img src={product.image} alt={product.title} className="max-w-full h-auto" />
      </div>

      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-yellow-600">Ціна: ₴{product.price}</p>
      <p className="text-gray-600">Опис: {product.description}</p>
      <p className="text-gray-600">Категорія: {product.category}</p>
      <p className="text-gray-600">Рейтинг: {product.rating.rate}</p>
      <div className="store__item-settings">
        <div className="flex items-center">
          <button
            className="store__count-button bg-red-500 text-white px-2 py-1 rounded-md w-1/2 mr-2"
            onClick={handleDecrement}
          >
            -
          </button>
          <div className="store__count-output text-yellow-500 w-1/2 text-center">{count} шт</div>
          <button
            className="store__count-button bg-green-500 text-white px-2 py-1 rounded-md w-1/2 ml-2"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <button
          className="store__button-buy bg-blue-500 text-white mt-2 px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          onClick={() => {
            const cartObject = JSON.parse(localStorage.getItem('cartObject')) || [];
            const { id } = product;
            cartObject[id] = count;
            localStorage.setItem('cartObject', JSON.stringify(cartObject));
          }}
        >
          Замовити
        </button>
        {count > 0 && (
          <div className="text-yellow-500 font-semibold">Загалом: ₴{(count * product.price).toFixed(2)}</div>
        )}
      </div>
    </li>
  );
};
