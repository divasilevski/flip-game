import styles from "../styles/PlayGround.module.scss";
import React, { useState, useEffect } from "react";

import Card from "./Card";
import ReloadModal from "./ReloadModal";
import { shuffle } from "../shared/utils";

function openedCards(cards) {
  return cards.filter((card) => card.isShow);
}

const PlayGround = (props) => {
  const [cards, changeCards] = useState(props.game.content);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    changeCards(() => {
      return shuffle(props.game.content).map((el, index) => {
        el.index = index;
        return el;
      });
    });
  }, [props.game]);

  const toggleShow = (index) => {
    changeCards((oldState) => {
      const state = [...oldState];

      state[index].isShow = true;

      const opened = openedCards(state);

      if (opened.length === 2) {
        if (opened[0].id === opened[1].id) {
          state[opened[0].index].content = "Opened";
          state[opened[1].index].content = "Opened";
        }

        state.forEach((card) => (card.isShow = false));
      }

      if (cards.every((card) => card.content === "Opened")) {
        props.onEnd();
        setIsWinner(true);
      }

      return [...state];
    });
  };

  return (
    <>
      {isWinner && "You are win!"}
      <ReloadModal onClick={props.onReload}></ReloadModal>

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
