import React, { useState } from "react";
import styles from "styles/PlayGround.module.scss";
import { Preset } from "types/game.types";
import { shuffle } from "utils/shuffle";

import Card from "./Card";

function openedCards(cards) {
  return cards.filter((card) => card.isShow);
}

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

interface PlayGroundProps {
  preset: Preset;
  onWin: () => void;
}

const PlayGround = ({ preset, onWin }: PlayGroundProps) => {
  const [game, changeGame] = useState(createGame(preset));
  const [cards, changeCards] = useState(game.content);
  const [isWinner, setIsWinner] = useState(false);

  const toggleShow = (index) => {
    changeCards((oldState: any) => {
      const state = [...oldState];

      const opened = openedCards(state);

      if (opened.length === 2) {
        if (opened[0].id === opened[1].id) {
          state[opened[0].index].content = "Opened";
          state[opened[1].index].content = "Opened";
        }

        state.forEach((card) => (card.isShow = false));
      }

      state[index].isShow = true;

      if (cards.every((card: any) => card.content === "Opened")) {
        onWin();
        setIsWinner(true);
      }

      return [...state];
    });
  };

  return (
    <>
      {isWinner && "You are win!"}
      <button onClick={onWin}></button>
      <div className={styles.playground}>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            onClick={toggleShow.bind(this, index)}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default PlayGround;
