import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timerRunning, setTimerRunning] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerRunning(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerRunning(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerRunning ? handleStop : handleStart}>
          {timerRunning ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerRunning ? "active" : undefined}>
        {timerRunning ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
