import React, { useState, useEffect } from 'react';
import './style.scss';

export const Time = () => {
  const [time, setTime] = useState('');

  const updateTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    setTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    updateTime(); // Update time initially
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return <div className='time'>{time}</div>;
};
