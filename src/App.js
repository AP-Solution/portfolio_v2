import { useState } from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Likes } from './components/Likes';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="App">
      <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />

      <Main />
      <Services />
      <Likes />
      <section className="music">
        

        <div className="music__wrapper">
          <h2 className="music__title">Мій плейліст:</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
