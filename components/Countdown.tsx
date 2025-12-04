import React, { useState, useEffect } from 'react';
import { Translation } from '../types';

interface CountdownProps {
  text: Translation['countdown'];
}

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const format = (n: number) => (n < 10 ? `0${n}` : n);

  return (
    <div className="flex flex-col items-center mx-1 md:mx-2 shrink-0">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-brand-200 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Main Card */}
        <div className="relative bg-white/40 backdrop-blur-lg border border-white/60 rounded-xl w-14 h-16 md:w-24 md:h-28 flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-transform duration-300 hover:-translate-y-1">
          <span className="text-2xl md:text-5xl font-bold text-brand-900 font-mono tracking-tighter bg-gradient-to-br from-brand-800 to-brand-600 bg-clip-text text-transparent">
            {format(value)}
          </span>
        </div>
      </div>
      <span className="mt-2 text-[10px] md:text-xs text-brand-900 font-bold tracking-widest uppercase opacity-60">
        {label}
      </span>
    </div>
  );
};

const Separator = () => (
  <div className="flex flex-col justify-center h-16 md:h-28 pb-4 md:pb-6 space-y-1 md:space-y-2 opacity-30 px-0.5 md:px-1 shrink-0">
    <div className="w-1 h-1 rounded-full bg-brand-800"></div>
    <div className="w-1 h-1 rounded-full bg-brand-800"></div>
  </div>
);

const Countdown: React.FC<CountdownProps> = ({ text }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let launchDate = new Date(currentYear, 1, 14); // Feb 14

      if (now.getTime() > launchDate.getTime()) {
        launchDate = new Date(currentYear + 1, 1, 14);
      }

      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center lg:items-start justify-center w-fit mx-auto lg:mx-0">
      <div className="flex items-center gap-3 mb-6 opacity-70 w-full">
        <div className="h-px flex-1 bg-brand-400"></div>
        <p className="text-brand-900 uppercase tracking-[0.15em] font-semibold text-xs md:text-sm whitespace-nowrap">
          {text.launchingText}
        </p>
        <div className="h-px flex-1 bg-brand-400"></div>
      </div>
      
      <div className="flex flex-nowrap justify-center items-start gap-0.5 md:gap-1">
        <TimeBox value={timeLeft.days} label={text.days} />
        <Separator />
        <TimeBox value={timeLeft.hours} label={text.hours} />
        <Separator />
        <TimeBox value={timeLeft.minutes} label={text.minutes} />
        <Separator />
        <TimeBox value={timeLeft.seconds} label={text.seconds} />
      </div>
    </div>
  );
};

export default Countdown;