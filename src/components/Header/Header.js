import React from "react";
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
          if (e.target.classList.contains('header__icon-menu') || e.target.parentNode.classList.contains('icon__menu')) {
            setIsMenuActive(!isMenuActive);
          }
        }}
      >
        <span></span>
      </div>

      <nav className={cn('header__navigation', isMenuActive ? 'active' : '')}>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </nav>
    </header>
  )
}