import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Marquee from 'react-double-marquee';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Movies } from './components/Movies/Movies';
import { Workshop } from './components/Workshop';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/gallery" element={<div className="test-field">Gallery</div>} />
          <Route path="/contacts" element={<div className="test-field">Contacts</div>} />
          <Route path="/blog" element={<div className="test-field">Blog</div>} />
        </Routes>
      </Router>
      <div
      style={{
        width: '100%',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee direction="left">
        Сайт в процесі розробки! Якщо ви побачили щось дивне чи не працююче - не лякайтеся, це не надовго 😉
      </Marquee>
    </div>
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
