import React, { useState } from "react";
import styles from "styles/Game.module.scss";
import { shuffle } from "utils/shuffle";
import { Preset } from "types/game.types";

import PlayGround from "./PlayGround";
import Timer from "./Timer";

const createGame = (preset: Preset) => {
  const count = preset.rows * preset.cols;
  const pureArray = Array.from(Array(count));
  const cards = pureArray.map((_, index) => ({
    id: Math.floor(index / 2) + 1,
    isShow: false,
    content: "Locked",
  }));

  return {
    timer: Date.now(),
    content: shuffle(cards).map((el, index) => {
      el.index = index;
      return el;
    }),
  };
};

interface GameProps {
  preset: Preset;
  onEnd: () => void;
}

const Game = ({ preset, onEnd }: GameProps) => {
  const [game, changeGame] = useState(createGame(preset));

  return (
    <div className={styles.game}>
      <Timer startTime={game.timer} />

      <PlayGround game={game} onEnd={onEnd}></PlayGround>

      <span className={styles.gameBack} onClick={onEnd}>
        Back
      </span>
    </div>
  );
};

export default Game;
