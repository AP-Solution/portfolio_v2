import React from "react";
import { Link } from 'react-router-dom';
import Marquee from 'react-double-marquee';
import cn from 'classnames';
import './Header.css';
import avatar from '../../images/ava.png';

export const Header = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__logotype">
            <img src={avatar} alt="img source" className="header__logo-img" />
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
                  to="/movies"
                  className="header__navigation-link"
                  onClick={() => setIsMenuActive(!isMenuActive)}
                >
                  Мої фільми
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
        </div>

        <div
          className="marquee"
        >
          <Marquee direction="left">
            🧐 Сайт в процесі розробки! Деякі частини можуть відображатися некорректно, а функції працювати дивакувато. Тримаю в курсі, ці явища тимчасові 👨‍💻
          </Marquee>
        </div>
      </header>


    </>
  )
}