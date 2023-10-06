import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Movies } from './components/Movies/Movies';
import { Workshop } from './components/Workshop';
import ContactForm from './components/ContactForm';
import { Accordion } from './components/Accordion/Accordion';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="App bg-gray-900">
      <Router>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/contacts" element={<Accordion />} />
          <Route path="/blog" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
