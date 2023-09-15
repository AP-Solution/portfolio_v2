import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import movies from './data/movies.json';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [visibleMovies, setVisibleMovies] = useState(movies);
  const [searchValue, setSearchValue] = useState('');

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
      <Services />
      <section className="about">


        <div className="about__image">

        </div>

        <div className="about__text">
          <h2>Трохи про мене</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>

      <section className="movies">
        <select
          className="movies__select"
          onChange={(e) => {
            switch (e.target.value) {
              case 'name':
                setVisibleMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)))
                break

              case 'year':
                setVisibleMovies([...movies].sort((a, b) => a.year - b.year))
                break

              case 'duration':
                setVisibleMovies([...movies].sort((a, b) => a.duration - b.duration))
                break

              default:
                setVisibleMovies(movies);
            }
          }}>
          <option>За замовчуванням</option>
          <option value="name">За назвою</option>
          <option value="duration">За тривалістю</option>
          <option value="year">За роком випуску</option>


        </select>

        <div className="search__wrapper">
          <input
            type="text"
            placeholder="type here to search..."
            className="search__input"
            onChange={(e) => {
              setVisibleMovies(movies.filter(movie => movie.title.includes(e.target.value)));
            }}
          />
        </div>
        <ul className="movies__wrapper">
          {visibleMovies && visibleMovies.map((movie) => {
            return (
              <li className="movies__item" key={movie.title}>
                <img
                  src={movie.preview_image}
                  alt={movie.title}
                  className="movie__image"
                  value={searchValue}
                />
                <h2 className="movie__title">{movie.title}</h2>
                <p className="movie__year">Рік випуску: {movie.year}</p>
                <p className="movie__genre">Жанр: {movie.genre.join(', ')}</p>
                <p className="movie__duration">Тривалість: {movie.duration} хв</p>
                <p className="movie__actors">Актори: {movie.actors.join(', ')}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
