import React from "react";
import styles from "styles/Card.module.scss";

interface CardProps {
  isFlip: boolean;
  imageId: string;
  onClick: () => void;
}

const Card = ({ isFlip, imageId, onClick }: CardProps) => {
  const flip = isFlip ? styles.flip : "";

  const bgImage = `url(https://placekitten.com/2${imageId}/3${imageId})`;

  return (
    <div className={styles.card + " " + flip} onClick={onClick}>
      <div className={styles.card__front} />
      <div className={styles.card__back} style={{ backgroundImage: bgImage }} />
    </div>
  );
};

export default Card;
