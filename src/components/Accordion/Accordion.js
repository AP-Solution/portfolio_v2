import React from 'react';

export const Accordion = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      <img src="https://via.placeholder.com/333x333" alt="My Work" className="w-64 h-64 md:w-96 md:h-96 rounded-full m-4" />
      <div className="flex flex-col items-start">
        <h2 className="text-2xl md:text-4xl font-bold m-2">Підзаголовок 1</h2>
        <h3 className="text-xl md:text-2xl m-2">Підзаголовок 2</h3>
      </div>
    </div>
  );
};
