import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const newYear2024 = new Date('2024-01-01 00:00:00');
    const difference = newYear2024 - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div>
      <h2>Час до початку 2024 року:</h2>
      <p>
        {timeLeft.days} днів {timeLeft.hours} годин {timeLeft.minutes} хвилин {timeLeft.seconds} секунд
      </p>
    </div>
  );
}