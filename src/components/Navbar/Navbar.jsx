import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <Link href='/' className={styles.link}>
          <div className={styles.logo}>radan.dev</div>
        </Link>
        <div className={styles.links}>
          <ThemeToggle />

          <Link href='/about' className={styles.link}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
