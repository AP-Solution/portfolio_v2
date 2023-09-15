import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Movies } from './components/Movies/Movies';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => setFetchedProducts(products))
  }, []);

  return (
    <div className="App">
      <Router>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/workshop" element={<div className="test-field">Workshop</div>} />
          <Route path="/gallery" element={<div className="test-field">Gallery</div>} />
          <Route path="/contacts" element={<div className="test-field">Contacts</div>} />
          <Route path="/blog" element={<div className="test-field">Blog</div>} />
        </Routes>
      </Router>
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
      <Services />
      <Movies />
      <section className="about">
        <div className="about__image"></div>
        <div className="about__text">
          <h2>Трохи про мене</h2>
          <p>Ваш текст тут...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
