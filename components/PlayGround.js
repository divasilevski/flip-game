import styles from "../styles/PlayGround.module.scss";
import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import ReloadModal from "../components/ReloadModal";
import { shuffle } from "../shared/utils";

function openedCards(cards) {
  return cards.filter((card) => card.isShow);
}

const PlayGround = (props) => {
  const [cards, changeCards] = useState(props.game.content);

  useEffect(() => {
    changeCards(() => {
      return shuffle(props.game.content).map((el, index) => {
        el.index = index;
        return el;
      });
    });
  }, [props.game]);

  const toggleShow = (index) => {
    changeCards((state) => {
      const opened = openedCards(state);

      if (opened.length === 2) {
        if (opened[0].id === opened[1].id) {
          state[opened[0].index].content = "Opened";
          state[opened[1].index].content = "Opened";
        }

        state.forEach((card) => (card.isShow = false));
      }

      state[index].isShow = true;
      return [...state];
    });
  };

  return (
    <>
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
