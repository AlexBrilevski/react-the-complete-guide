import { useState, useEffect } from 'react';

export default function ProgressBar({ maxTime }) {
  const [remainingTime, setRemainingTime] = useState(maxTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Interval');
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress value={remainingTime} max={maxTime} />
  );
}
