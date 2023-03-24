import React, { useState } from "react";

import PlayPanel from "./PlayPanel";
import PlayGround from "./PlayGround";
import Lobby from "./Lobby";
import { Preset } from "types/game.types";

const Play = () => {
  const startGame = (preset: Preset) => {
    console.log(preset);
  };
  // const [game, changeGame] = useState({
  // timer: new Date(),
  // content: [
  // { id: 1, isShow: false, content: "Locked" },
  // { id: 4, isShow: false, content: "Locked" },
  // { id: 3, isShow: false, content: "Locked" },
  // { id: 2, isShow: false, content: "Locked" },
  // { id: 1, isShow: false, content: "Locked" },
  // { id: 2, isShow: false, content: "Locked" },
  // { id: 3, isShow: false, content: "Locked" },
  // { id: 4, isShow: false, content: "Locked" },
  //   ],
  // });

  // const reloadGame = () => {
  //   changeGame({
  //     timer: new Date(),
  //     content: [
  //       { id: 1, isShow: false, content: "Locked" },
  //       { id: 4, isShow: false, content: "Locked" },
  //       { id: 3, isShow: false, content: "Locked" },
  //       { id: 2, isShow: false, content: "Locked" },
  //       { id: 1, isShow: false, content: "Locked" },
  //       { id: 2, isShow: false, content: "Locked" },
  //       { id: 3, isShow: false, content: "Locked" },
  //       { id: 4, isShow: false, content: "Locked" },
  //     ],
  //   });
  // };

  // const endGame = () => {
  //   const timeInSec = (Number(new Date()) - Number(game.timer)) / 1000;
  //   console.log(timeInSec);
  // };

  return (
    <div className="fit">
      <Lobby onSelect={startGame} />
      {/* <PlayPanel game={game}></PlayPanel>
      <PlayGround
        game={game}
        onReload={reloadGame}
        onEnd={endGame}
      ></PlayGround> */}
    </div>
  );
};

export default Play;
