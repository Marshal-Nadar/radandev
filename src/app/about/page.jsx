import React from 'react';
import styles from './about.module.css';
import Image from 'next/image';
import Head from 'next/head';

export const metadata = {
  title: 'About',
  description: 'The best blog app!',
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/happy-man.jpg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            {`Welcome to my corner of the digital world!`}
          </h1>
          <p className={styles.postDesc}>
            {`I'm not just your average software developer — I'm a digital explorer, a code wizard, and a master of turning caffeine into code! 🚀 `}
          </p>
          <p className={styles.postDesc}>
            I'm a full-stack software developer with over five years of
            experience crafting innovative web applications. I leverage my
            expertise in <em className={styles.emphasized}>ReactJS</em>,{' '}
            <em className={styles.emphasized}>NodeJS</em>, and both
            <em className={styles.emphasized}>SQL</em>
            and <em className={styles.emphasized}>NoSQL</em> databases to bring
            my clients' visions to life.
          </p>
          <p className={styles.postDesc}>
            {`But life as a developer isn't all about squashing bugs. When I'm not hunting down pesky bugs, you'll find me on the badminton court, deeply focused on the chessboard, plotting my next move.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
