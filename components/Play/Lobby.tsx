import React from "react";
import styles from "styles/Lobby.module.scss";
import { Preset } from "types/game.types";
import { lobbyItems } from "config/game";
import LobbyItem from "./LobbyItem";
import Link from "next/link";

interface LobbyProps {
  onSelect: (item: Preset) => void;
}

const Lobby = ({ onSelect }: LobbyProps) => {
  return (
    <div className={styles.lobby}>
      <div className={styles.lobbyItems}>
        {lobbyItems.map((item) => {
          return (
            <LobbyItem
              key={item.title}
              title={item.title}
              onClick={() => onSelect(item)}
            />
          );
        })}
      </div>

      <Link className={styles.lobbyBack} href="/">
        Back
      </Link>
    </div>
  );
};

export default Lobby;
