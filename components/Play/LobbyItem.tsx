import React from "react";

import styles from "styles/LobbyItem.module.scss";

interface LobbyItemProps {
  title: string;
  onClick: () => void;
}

const LobbyItem = ({ title, onClick }: LobbyItemProps) => {
  return (
    <div className={styles.lobbyItem} onClick={onClick}>
      {title}
    </div>
  );
};

export default LobbyItem;
