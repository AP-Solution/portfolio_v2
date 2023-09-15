import React from 'react';
import './Services.css';
import photoEditing from "../../images/services__photo-editing.png";
import dataAnalisys from "../../images/services__data-analisys.png";
import websiteDeveloping from "../../images/services__website-developing.png";

import reactIcon from "../../images/icon__react.png";
import jsIcon from "../../images/icon__js.png";
import nodeIcon from "../../images/icon__node.png";
import htmlIcon from "../../images/icon__html5.png";
import cssIcon from "../../images/icon__css3.png";
import sqlIcon from "../../images/icon__mysql.png";

export const Services = () => {
  return (
    <section className="services">
      <h2 className="services__title">
        Чим я користуюся:
      </h2>

      <div className="technologies__wrapper">
        <div className="technologies__case">
          <img src={reactIcon} alt="123" />
          <h4 className="technologies__case-title">React JS</h4>
        </div>

        <div className="technologies__case">
          <img src={jsIcon} alt="123" />
          <h4 className="technologies__case-title">JavaScript</h4>
        </div>

        <div className="technologies__case">
          <img src={nodeIcon} alt="123" />
          <h4 className="technologies__case-title">Node JS</h4>
        </div>

        <div className="technologies__case">
          <img src={htmlIcon} alt="123" />
          <h4 className="technologies__case-title">HTML 5</h4>
        </div>

        <div className="technologies__case">
          <img src={cssIcon} alt="123" />
          <h4 className="technologies__case-title">CSS 3</h4>
        </div>

        <div className="technologies__case">
          <img src={sqlIcon} alt="123" />
          <h4 className="technologies__case-title">MySQL</h4>
        </div>
      </div>

      <h2 className="services__title">Що роблю:</h2>

      <div className="services__wrapper">
        <div className="services__case">
          <img src={websiteDeveloping} alt="123" />

          <h4 className="services__case-title">
            Розробка веб-сайтів та додатків
          </h4>
        </div>

        <div className="services__case">
          <img src={photoEditing} alt="123" />

          <h4 className="services__case-title">
            Обробка та редагування фото
          </h4>
        </div>

        <div className="services__case">
          <img src={dataAnalisys} alt="123" />

          <h4 className="services__case-title">
            Аналіз даних, робота з файлами
          </h4>
        </div>
      </div>
    </section>
  )
}