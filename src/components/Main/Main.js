import React, { useState } from 'react';
import './Main.css';
import authorImage from '../../images/a.jpeg';
import { Services } from '../Services/Services';

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          src={authorImage}
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
                <p> Мене звати Вячеслав, я веб-розробник з Києва. Займаюся розробкою односторінкових, багатосторінкових сайтів на React JS, а також веб-додатків що взаємодіють з сервером на NodeJS 👨‍💻 </p>
                <p> Для стилізації додатків я віддаю перевагу фреймворку Tailwind, однак у багатьох випадках пишу власний CSS - саме таким комбінованим способом я стилізую цей сайт 👨‍🎨 З часом він буде покращуватися, то ж цілком можливо ви читаєте це на швидкоруч створеному модальному вікні😅</p>
                <p> Розробляючи це портфоліо я не використовую макет, формую сайт безпосередньо пишучи код. Якщо маєте пропозиції що можна покращити - буду дуже вдячний якщо повідомите, написавщи мені через розділ "Контакти" 😇</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Services />
      <section className="about">
        <div className="about__image"></div>
        <div className="about__text">
          <h2>Трохи про мене</h2>
          <p>Ваш текст тут...</p>
        </div>
      </section>
    </>
  )
}