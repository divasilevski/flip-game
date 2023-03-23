import React from "react";
import Link from "next/link";

import styles from "styles/Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.menu__title}>Flip game</h1>
      <div className={styles.menu__item}>
        <Link href="/play">play</Link>
      </div>
      <div className={styles.menu__item}>
        <Link href="/records">records</Link>
      </div>
    </div>
  );
};

export default Menu;
