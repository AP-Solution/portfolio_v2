import React from 'react';
import './Main.css';

export const Main = () => {
  return (
    <main className="main">
      <h1 className="main__title">
        Портфоліо<br />web-розробника
      </h1>

      <h2 className="main__subtitle">
        FullStack JavaScript developer
      </h2>

      <h2 className="main__subtitle subtitle__author-name">
        Вячеслав Столярчук
      </h2>

      <img
        src="./img/author.jpeg"
        alt="author"
        className="main__author-img"
      />
    </main>
  )
}