import React, { useState, useEffect } from 'react';
import { weddingData } from './data';

export function Countdown({ className = '' }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingData.date.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center justify-center space-x-4 md:space-x-8 ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-display">{timeLeft.days}</span>
        <span className="text-xs tracking-[0.2em] uppercase mt-2 opacity-70">Days</span>
      </div>
      <span className="text-3xl md:text-5xl font-display opacity-50">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-display">{timeLeft.hours}</span>
        <span className="text-xs tracking-[0.2em] uppercase mt-2 opacity-70">Hours</span>
      </div>
      <span className="text-3xl md:text-5xl font-display opacity-50">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-display">{timeLeft.minutes}</span>
        <span className="text-xs tracking-[0.2em] uppercase mt-2 opacity-70">Mins</span>
      </div>
      <span className="text-3xl md:text-5xl font-display opacity-50">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-display">{timeLeft.seconds}</span>
        <span className="text-xs tracking-[0.2em] uppercase mt-2 opacity-70">Secs</span>
      </div>
    </div>
  );
}
