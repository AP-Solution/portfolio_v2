import React, { useEffect, useState } from 'react';
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
  }, []);

  return (
    <section className="min-h-screen bg-gray-700 p-10">
      <h2 className="text-4xl text-center text-white mb-8">Віртуальний інтернет-магазин</h2>
      <span className="loader"></span>
      {fetchedProducts && (
        <div className="flex flex-col">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {fetchedProducts.map((product) => (
              <StoreItem
                product={product}
                updateTotalPrice={updateTotalPrice}
                key={product.id}
              />
            ))}
          </ul>
          <div className="mt-4 text-center text-white">Загалом до сплати: {totalPrice.toFixed(2)} ₴</div>
        </div>
      )}
    </section>
  );
};
