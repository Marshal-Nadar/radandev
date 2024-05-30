import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, radan dev here!</b> Discover my stories and creative ideas.
      </h1>
      <hr className={styles.hr} />
    </div>
  );
};

export default Featured;
