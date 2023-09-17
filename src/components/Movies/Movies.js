import React, { useState } from 'react';
import './Movies.css';
import movies from '../../data/movies.json';
import searchIcon from '../../images/icon__search.svg';

export const Movies = () => {
  const [visibleMovies, setVisibleMovies] = useState(movies);
  return (
    <section className="movies">
        <h2 className="movies__title">Добірка фільмів</h2>
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
          <img
            src={searchIcon}
            alt="search__icon"
            className="search__icon"
          />
          <input
            type="text"
            placeholder="Почніть вводити назву..."
            className="search__input"
            onChange={(e) => {
              setVisibleMovies(movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
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
  )
}