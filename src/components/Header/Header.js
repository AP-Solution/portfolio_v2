import React from "react";
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Header.css';

export const Header = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <header className="header">
      <div className="header__logotype">
        <img src="./img/ava.png" alt="img source" className="header__logo-img" />
      </div>

      <div className="header__title">
        <h2>AP_SOLUTION</h2>
      </div>

      <div
        className={cn('header__icon-menu', isMenuActive ? 'active' : '')}
        onClick={e => {
          if (e.target.classList.contains('header__icon-menu')) {
            setIsMenuActive(!isMenuActive);
          }
        }}
      >
        <span className="header__icon-menu"></span>
      </div>

      <nav className={cn('header__navigation', isMenuActive ? 'active' : '')}>
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <Link
              to="/"
              className="header__navigation-link"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
                Головна
            </Link>
          </li>

          <li className="header__navigation-item">
            <Link
              to="/workshop"
              className="header__navigation-link"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
                Мої роботи
            </Link>
          </li>

          <li className="header__navigation-item">
            <Link
              to="/gallery"
              className="header__navigation-link"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              Галерея
            </Link>
          </li>

          <li className="header__navigation-item">
            <Link
              to="/contacts"
              className="header__navigation-link"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              Контакти
            </Link>
          </li>

          <li className="header__navigation-item">
            <Link
              to="/blog"
              className="header__navigation-link"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              Блог
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}