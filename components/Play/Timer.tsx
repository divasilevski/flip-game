import React, { useEffect, useState } from "react";
import styles from "styles/Timer.module.scss";

interface TimerProps {
  startTime: number;
}

const Timer = ({ startTime }: TimerProps) => {
  const [time, setTime] = useState(0);

  const tick = () => {
    setTime((oldTime) => oldTime + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return clearInterval.bind(this, timer);
  }, [startTime]);

  return (
    <div className={styles.timer}>
      {time ? <time>{time}</time> : <small>GO</small>}
    </div>
  );
};

export default Timer;
