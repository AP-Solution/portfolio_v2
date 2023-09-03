import React from 'react';
import './Services.css';

export const Services = () => {
  return (
    <section className="services">
      <h2 className="services__title">
        Чим я користуюся:
      </h2>

      <div className="technologies__wrapper">
        <div className="technologies__case">
          <img src="./img/icon__react.png" alt="123" />
          <h4 className="technologies__case-title">React JS</h4>
        </div>

        <div className="technologies__case">
          <img src="./img/icon__js.png" alt="123" />
          <h4 className="technologies__case-title">JavaScript</h4>
        </div>

        <div className="technologies__case">
          <img src="./img/icon__node.png" alt="123" />
          <h4 className="technologies__case-title">Node JS</h4>
        </div>

        <div className="technologies__case">
          <img src="./img/icon__html5.png" alt="123" />
          <h4 className="technologies__case-title">HTML 5</h4>
        </div>

        <div className="technologies__case">
          <img src="./img/icon__css3.png" alt="123" />
          <h4 className="technologies__case-title">CSS 3</h4>
        </div>

        <div className="technologies__case">
          <img src="./img/icon__mysql.png" alt="123" />
          <h4 className="technologies__case-title">MySQL</h4>
        </div>
      </div>

      <h2 className="services__title">Що роблю:</h2>

      <div className="services__wrapper">
        <div className="services__case">
          <img src="./img/services__development.png" alt="123" />

          <h4 className="services__case-title">
            Розробка веб-сайтів та додатків
          </h4>
        </div>

        <div className="services__case">
          <img src="./img/photo-editing.png" alt="123" />

          <h4 className="services__case-title">
            Обробка та редагування фото
          </h4>
        </div>

        <div className="services__case">
          <img src="./img/services__data-analisys.png" alt="123" />

          <h4 className="services__case-title">
            Аналіз даних, робота з файлами
          </h4>
        </div>
      </div>
    </section>
  )
}