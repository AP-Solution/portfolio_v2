import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Likes } from './components/Likes';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="App">
      <Router>
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/workshop" element={<div className="test-field">Workshop</div>} />
          <Route path="/gallery" element={<div className="test-field">Gallery</div>} />
          <Route path="/contacts" element={<div className="test-field">Contacts</div>} />
          <Route path="/blog" element={<div className="test-field">Blog</div>} />
        </Routes>
      </Router>
      <Services />
      <Likes />
      <section className="about">
        

        <div className="about__image">

        </div>

        <div className="about__text">
          <h2>Про мене</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
