import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/PlayPanel.module.scss";

const PlayPanel = ({ game }) => {
  const [clock, setClock] = useState(0);

  const tick = () => {
    setClock(new Date(new Date() - game.timer).getSeconds() - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return clearInterval.bind(this, timer);
  }, [game]);

  return (
    <div className={styles.playpanel}>
      <span>
        <span>Time: </span>
        <span>{clock}</span>
      </span>
      <Link href="/">Назад</Link>
    </div>
  );
};

export default PlayPanel;
