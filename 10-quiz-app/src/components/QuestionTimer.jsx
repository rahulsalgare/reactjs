import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("SET_INTERVAL");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress id="question-timer" value={remainingTime} max={timeout} />;
}
