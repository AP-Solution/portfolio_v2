import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photoEditing from "../../images/services__photo-editing.png";
import dataAnalisys from "../../images/services__data-analisys.png";
import websiteDeveloping from "../../images/services__website-developing.png";

import reactIcon from "../../images/icon__react.png";
import tsIcon from "../../images/icon__ts.png";
import jsIcon from "../../images/icon__js.png";
import nodeIcon from "../../images/icon__node.png";
import htmlIcon from "../../images/icon__html5.png";
import cssIcon from "../../images/icon__css3.png";
import sqlIcon from "../../images/icon__mysql.png";
import gitIcon from "../../images/icon__git.png";
import tailwindIcon from "../../images/icon__tailwind.png";
import chatgptIcon from "../../images/icon__chatgpt.png";
import soverflowIcon from "../../images/icon__soverflow.png";
import pinterestIcon from "../../images/icon__pinterest.png";
import instagramIcon from "../../images/icon__instagram.png";

export const Services = () => {

  const techStack = [
    { icon: htmlIcon, alt: "HTML 5", title: "HTML 5" },
    { icon: cssIcon, alt: "CSS 3", title: "CSS 3" },
    { icon: jsIcon, alt: "JavaScript", title: "JavaScript" },
    { icon: reactIcon, alt: "React JS", title: "React JS" },
    { icon: tsIcon, alt: "TypeScript", title: "TypeScript" },
    { icon: nodeIcon, alt: "Node JS", title: "Node JS" },
    { icon: sqlIcon, alt: "MySQL", title: "MySQL" },
    { icon: gitIcon, alt: "Git", title: "Git" },
    { icon: tailwindIcon, alt: "Tailwind", title: "Tailwind" },
  ];

  const services = [
    { image: websiteDeveloping, alt: "Розробка веб-сайтів та додатків", title: "Розробка веб-сайтів та додатків", bgColor: "from-green-400 to-blue-500" },
    { image: photoEditing, alt: "Обробка та редагування фото", title: "Обробка та редагування фото", bgColor: "from-blue-400 to-purple-500" },
    { image: dataAnalisys, alt: "Аналіз даних, робота з файлами", title: "Аналіз даних, робота з файлами", bgColor: "from-purple-400 to-red-500" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  };

  return (
    <section className="text-white min-h-screen px-4">
      <h2 className="text-4xl text-center mb-8">Мій стек технологій:</h2>
      <div className="px-10">
        <Slider {...settings}>
          {techStack.map(item => (
            <div key={item.alt} className="text-center">
              <img src={item.icon} alt={item.alt} className="w-20 mx-auto" />
              <h4 className="text-xl mt-2">{item.title}</h4>
            </div>
          ))}
        </Slider>

      </div>

      <h2 className="text-4xl text-center mt-12 mb-8">Що я роблю:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.alt} className={`bg-gradient-to-r ${service.bgColor} rounded-lg p-8 text-center hover:from-pink-500 hover:to-yellow-500`}>
            <img src={service.image} alt={service.alt} className="w-32 mx-auto mb-4" />
            <h4 className="text-2xl">{service.title}</h4>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 p-8 rounded-xl shadow-lg mt-12">
        <h2 className="text-4xl text-center text-white mt-12 mb-8">Якими сервісами користуюся:</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <img src={chatgptIcon} alt="chatgpt" className="w-32 mx-auto mb-4" />
            <p className="text-white text-lg">ChatGPT</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={soverflowIcon} alt="stack overflow" className="w-32 mx-auto mb-4" />
            <p className="text-white text-lg">Stack Overflow</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={pinterestIcon} alt="pinterest" className="w-32 mx-auto mb-4" />
            <p className="text-white text-lg">Pinterest</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={instagramIcon} alt="instagram" className="w-32 mx-auto mb-4" />
            <p className="text-white text-lg">Instagram</p>
          </div>
        </div>
      </div>

    </section>
  )
}
