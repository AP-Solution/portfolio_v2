import React, { useState } from 'react';
import movies from '../../data/movies.json';
import searchIcon from '../../images/icon__search.svg';

export const Movies = () => {
  const [visibleMovies, setVisibleMovies] = useState(movies);

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-gray-800 to-yellow-400 min-h-screen py-16">
      <h2 className="text-6xl text-center text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-yellow-500 mb-8">Добірка фільмів</h2>
      <div className="w-64 mx-auto mb-8">
        <select
          className="w-full p-2 border border-blue-500 rounded bg-white"
          onChange={(e) => {
            switch (e.target.value) {
              case 'name':
                setVisibleMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
                break;

              case 'year':
                setVisibleMovies([...movies].sort((a, b) => a.year - b.year));
                break;

              case 'duration':
                setVisibleMovies([...movies].sort((a, b) => a.duration - b.duration));
                break;

              default:
                setVisibleMovies(movies);
            }
          }}
        >
          <option>За замовчуванням</option>
          <option value="name">За назвою</option>
          <option value="duration">За тривалістю</option>
          <option value="year">За роком випуску</option>
        </select>
      </div>
      <div className="flex items-center bg-white rounded-md p-2 mx-4 mb-8">
        <img src={searchIcon} alt="search__icon" className="w-6 h-6 mr-2" />
        <input
          type="text"
          placeholder="Почніть вводити назву..."
          className="w-full py-1 px-2 outline-none text-gray-700"
          onChange={(e) => {
            setVisibleMovies(movies.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {visibleMovies && visibleMovies.map((movie) => {
          return (
            <li className="bg-gray-300 rounded-lg shadow-md p-4" key={movie.title}>
              <img
                src={movie.preview_image}
                alt={movie.title}
                className="w-full h-auto max-h-96 rounded-t-lg object-contain mb-4"
              />

              <h2 className="text-2x1 font-semibold">
                {movie.title}
              </h2>

              <p className="text-gray-600">
                Рік випуску: {movie.year}
              </p>

              <p className="text-gray-600">
                Жанр: {movie.genre.join(', ')}
              </p>

              <p className="text-gray-600">
                Тривалість: {movie.duration} хв
              </p>

              <p className="text-gray-600">
                Актори: {movie.actors.join(', ')}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
