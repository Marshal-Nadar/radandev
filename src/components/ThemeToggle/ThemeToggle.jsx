'use client';

import Image from 'next/image';
import styles from './themeToggle.module.css';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { trackGAEvent } from '@/utils/google-analytics';

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  const handleToggle = () => {
    if (theme === 'light') {
      trackGAEvent('Button Clicks', 'Dark Mode Button', 'Footer');
    } else {
      trackGAEvent('Button Clicks', 'Light Mode Button', 'Footer');
    }

    toggle();
  };

  return (
    <div
      className={styles.container}
      onClick={() => {
        handleToggle();
      }}
      style={
        theme === 'dark'
          ? { backgroundColor: 'white' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='' width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === 'dark'
            ? { left: 1, background: '#0f172a' }
            : { right: 1, background: 'white' }
        }
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
