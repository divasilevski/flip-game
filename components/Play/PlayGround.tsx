import React from "react";
import styles from "styles/PlayGround.module.scss";
import { Preset } from "types/game.types";
import { useGame } from "hooks/useGame";
import Card from "./Card";

interface PlaygroundProps {
  preset: Preset;
  onWin: () => void;
}

const Playground = ({ preset, onWin }: PlaygroundProps) => {
  const { cards, toggleCard } = useGame({ preset, onWin });

  return (
    <div className={styles.playground} data-columns={preset.cols}>
      {cards.map((card) => (
        <Card key={card.uid} card={card} onClick={() => toggleCard(card.uid)} />
      ))}
    </div>
  );
};

export default Playground;
