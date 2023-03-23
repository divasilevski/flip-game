import styles from "styles/Card.module.scss";
import React from "react";

const Card = (props) => {
  const cardClasses = [styles.card];
  if (props.card.isShow || props.card.content === "Opened")
    cardClasses.push(styles.flip);

  const bgImage = `url(https://placekitten.com/20${props.card.id}/30${props.card.id})`;

  return (
    <div className={cardClasses.join(" ")} onClick={props.onClick}>
      <div className={styles.card__front}>{props.card.content}</div>
      <div
        className={styles.card__back}
        style={{ backgroundImage: bgImage }}
      ></div>
    </div>
  );
};

export default Card;
