import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

export const useCountdownTimer = (isActive: boolean = true) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 5,
    hours: 23,
    mins: 32,
    secs: 14
  });

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  return timeRemaining;
};
