import React, { useState } from 'react';
import './Main.css';

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        onClick={() => setIsModalOpen(!isModalOpen)}
      />

      {isModalOpen && (
        <div className="modal">
        <div className="modal__wrapper">
          <button
            className="modal__close"
            onClick={() => setIsModalOpen(!isModalOpen)}
          ></button>
          <h3 className="modal__title">Вітаю на моєму сайті-портфоліо!</h3>
          
          <div className="modal__content">
            <p> Мене звати Вячеслав, і я веб-розробник з Києва. Я займаюся розробкою односторінкових, багатосторінкових сайтів на React JS, а також веб-додатків що взаємодіють з сервером на NodeJS.</p>
            <p> Окрім JavaScript я вивчаю мову програмування Python: практикую аналіз даних, розробку telegram-ботів та вирішую задачі на CodeWars.</p>
            <p> Розробляючи це портфоліо я не використовую макет, формую сайт безпосередньо пишучи код. Якщо маєте пропозиції що можна покращити - буду дуже вдячний якщо повідомите, написавщи мені через розділ "Контакти"</p>
          </div>
        </div>
      </div>
      )}
    </main>
  )
}