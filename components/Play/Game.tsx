import React, { useRef, useState } from "react";
import styles from "styles/Game.module.scss";
import { Preset } from "types/game.types";
import { useRecords } from "hooks/useRecords";

import PlayGround from "./PlayGround";
import Modal from "./Modal";
import Timer from "./Timer";

interface GameProps {
  preset: Preset;
  onEnd: () => void;
}

const Game = ({ preset, onEnd }: GameProps) => {
  const timer = useRef(Date.now()).current;
  const { createRecord } = useRecords({ onlyCreate: true });
  const [time, setTime] = useState(null);

  const gameWin = () => {
    const time = (Date.now() - timer) / 1000;

    setTime(time);
    createRecord({ title: preset.title, time });
  };

  return (
    <div className={styles.game}>
      {time && <Modal time={time} onEnd={onEnd} />}

      <Timer isGoing={!time} />

      <PlayGround preset={preset} onWin={gameWin} />

      <span className={styles.gameBack} onClick={onEnd}>
        Back
      </span>
    </div>
  );
};

export default Game;
