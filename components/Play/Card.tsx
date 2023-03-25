import React from "react";
import styles from "styles/Card.module.scss";

const Card = (props) => {
  const cardClasses = [styles.card];

  if (props.card.isOpen || props.card.isResolve) {
    cardClasses.push(styles.flip);
  }

  const bgImage = `url(https://placekitten.com/20${props.card.imageId}/30${props.card.imageId})`;

  return (
    <div className={cardClasses.join(" ")} onClick={props.onClick}>
      <div className={styles.card__front} />
      <div className={styles.card__back} style={{ backgroundImage: bgImage }} />
    </div>
  );
};

export default Card;
