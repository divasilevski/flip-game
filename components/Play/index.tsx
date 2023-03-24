import React, { useState } from "react";
import { Preset } from "types/game.types";
import Lobby from "./Lobby";
import Game from "./Game";

const Play = () => {
  const [preset, setPreset] = useState<Preset>(null);

  const startGame = (preset: Preset) => {
    setPreset(preset);
  };

  const endGame = () => {
    setPreset(null);
  };

  if (preset) {
    return <Game preset={preset} onEnd={endGame} />;
  }

  return <Lobby onSelect={startGame} />;
};

export default Play;
