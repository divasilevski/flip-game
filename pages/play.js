import { useState } from "react";

import PlayGround from "../components/PlayGround";
import PlayPanel from "../components/PlayPanel";

export default function Play() {
  const [game, changeGame] = useState({
    timer: new Date(),
    content: [
      { id: 1, isShow: false, content: "Locked" },
      // { id: 4, isShow: false, content: "Locked" },
      // { id: 3, isShow: false, content: "Locked" },
      // { id: 2, isShow: false, content: "Locked" },
      { id: 1, isShow: false, content: "Locked" },
      // { id: 2, isShow: false, content: "Locked" },
      // { id: 3, isShow: false, content: "Locked" },
      // { id: 4, isShow: false, content: "Locked" },
    ],
  });

  const reloadGame = () => {
    changeGame({
      timer: new Date(),
      content: [
        { id: 1, isShow: false, content: "Locked" },
        { id: 4, isShow: false, content: "Locked" },
        { id: 3, isShow: false, content: "Locked" },
        { id: 2, isShow: false, content: "Locked" },
        { id: 1, isShow: false, content: "Locked" },
        { id: 2, isShow: false, content: "Locked" },
        { id: 3, isShow: false, content: "Locked" },
        { id: 4, isShow: false, content: "Locked" },
      ],
    });
  };

  const endGame = () => {
    const timeInSec = (new Date() - game.timer) / 1000;
    console.log(timeInSec);
  };

  return (
    <div className="page center">
      <div className="fit">
        <PlayPanel game={game}></PlayPanel>
        <PlayGround
          game={game}
          onReload={reloadGame}
          onEnd={endGame}
        ></PlayGround>
      </div>
    </div>
  );
}
