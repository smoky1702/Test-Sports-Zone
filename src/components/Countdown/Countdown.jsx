import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Giả sử sự kiện sẽ diễn ra sau 30 ngày kể từ ngày hiện tại
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);
    
    const difference = eventDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="countdown">
      <div className="container">
        <div className="countdown-container">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Ngày</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Giờ</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Phút</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Giây</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;