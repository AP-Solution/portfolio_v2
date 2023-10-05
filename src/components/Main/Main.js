import React, { useState } from 'react';
import './Main.css';
import authorImage from '../../images/a.jpeg';
import { Services } from '../Services/Services';

export const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomFact, setRandomFact] = useState('');

  const facts = [
    'Працював менеджером з продажів',
    'Доставляв піцу',
    'Вчився на будівельника',
    'Жодного разу не був за кордоном',
    'Їздив велосипедом більше 100км на день',
    'Не маю домашніх тварин',
    'Прокидаюся рано, лягаю спати пізно',
    'Дивився не більше 10-х серіалів',
    'Маю 5000+ ігрових годин у Dota2',
    'Село люблю більше ніж місто',
    'Інколи роблю зарядку',
    'Слухаю дуже різну музику',
    'Ненавиджу кацапів',
    'Цікавлюся e-commerce сферою',
    'Не користуюся парасолькою',
    'Ремонтую велосипед власноруч',
    'Готую смачну піцу',
    'Рідко жаліюся на життя',
    'Люблю експериментувати',
    'Піднімався на Говерлу',
    'Вірю в ЗСУ',
    'Був наставником на різних роботах',
    'Захоплююсь цифровим мистецтвом',
    'Не маю аккаунту в TikTok'
  ];

  const updateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex]);
};

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
          <h2 className="about__title">Декілька рандомних фактів</h2>
          <p className="about__description"> {randomFact} </p>
          <button
            className="about__update-button"
            onClick={updateRandomFact}
          >
            Оновити
          </button>
        </div>
      </section>
    </>
  )
}