import React from "react";
import styles from "styles/Records.module.scss";
import Link from "next/link";
import { useRecords } from "hooks/useRecords";

const Records = () => {
  const { records } = useRecords();
  return (
    <div className={styles.records}>
      <h1 className={styles.recordsTitle}>Records</h1>

      <div className={styles.recordsGrid}>
        {records.map((record) => (
          <React.Fragment key={record.title}>
            <dt>{record.title}:</dt>
            <dd>{record.time}s</dd>
          </React.Fragment>
        ))}
      </div>

      <Link className={styles.recordsBack} href="/">
        Назад
      </Link>
    </div>
  );
};

export default Records;
