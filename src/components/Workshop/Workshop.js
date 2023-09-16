import React, { useEffect, useState } from "react";
import './Workshop.css';

export const Workshop = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setFetchedProducts(products))
  }, []);
  return (
    <section className="workshop">
      <section className="store">
        <h2 className="store__title">Віртуальний інтернет-магазин</h2>
        <div className="store__wrapper">
          <ul className="store__list">
            {fetchedProducts.map(product => (
               <li className="store__item" key={product.id}>
               <div className="store__item-image">
                 <img src={product.image} alt={product.title} />
               </div>
               
               <h3>{product.title}</h3>
               <p>Ціна: ${product.price}</p>
               <p>Опис: {product.description}</p>
               <p>Категорія: {product.category}</p>
               <p>Рейтинг: {product.rating.rate}</p>
             </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
};