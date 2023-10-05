import React, { useEffect, useState } from 'react';

export const Test = () => {
  const projects = [
      { title: 'Проект 1', description: 'Опис проекту 1' },
      { title: 'Проект 2', description: 'Опис проекту 2' },
      { title: 'Проект 3', description: 'Опис проекту 3' },
  ];

  return (
      <div className="p-8">
          <h2 className="text-4xl mb-6">Мої проекти</h2>
          <div className="grid grid-cols-3 gap-4">
              {projects.map((project, index) => (
                  <div key={index} className="border p-4 hover:bg-blue-100 transition duration-500">
                      <h3 className="text-2xl mb-4">{project.title}</h3>
                      <p>{project.description}</p>
                  </div>
              ))}
          </div>
      </div>
  );
}

// export const ContactSection = () => {
//   return (
//       <div className="bg-blue-100 p-8">
//           <h2 className="text-4xl mb-6">Зв'яжіться зі мною</h2>
//           <div className="animate__animated animate__bounce">
//               <p>Email: ваша.email@адреса.com</p>
//               <p>Телефон: +380 12 345 6789</p>
//           </div>
//       </div>
//   );
// }

export const ContactSection = () => {
  const [bounce, setBounce] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(!bounce);
    }, 2000);

    return () => clearInterval(interval);
  }, [bounce]);

  return (
      <div className="bg-blue-100 p-8">
          <h2 className="text-4xl mb-6">Зв'яжіться зі мною</h2>
          <div className={`${bounce ? 'animate__animated animate__bounce' : ''}`}>
              <p>Email: ваша.email@адреса.com</p>
              <p>Телефон: +380 12 345 6789</p>
          </div>
      </div>
  );
}

export const BarbershopBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    service: 'Стрижка',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна відправити дані на сервер
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Запис на підстригання</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Ім'я</label>
          <input type="text" name="name" onChange={handleChange} className="p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" name="email" onChange={handleChange} className="p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Дата</label>
          <input type="date" name="date" onChange={handleChange} className="p-2 w-full border rounded-md" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Послуга</label>
          <select name="service" onChange={handleChange} className="p-2 w-full border rounded-md">
            <option>Стрижка</option>
            <option>Бриття</option>
            <option>Моделювання бороди</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Повідомлення</label>
          <textarea name="message" rows="4" onChange={handleChange} className="p-2 w-full border rounded-md"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
          Записатися
        </button>
      </form>
    </div>
  );
}