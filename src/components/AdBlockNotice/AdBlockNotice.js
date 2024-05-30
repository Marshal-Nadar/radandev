'use client';
import { useEffect } from 'react';
import { trackGAEvent } from '@/utils/google-analytics';
import styles from './AdBlockNotice.module.css';

const AdBlockNotice = () => {
  const handleAdblock = () => {
    trackGAEvent('Button Clicks', 'Adblock Button Click', 'AdBlockNotice');
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  return (
    <div className={styles.adBlockNotice}>
      <div className={styles.modalContent}>
        <div className={styles.messageContainer}>
          <h4 className={styles.messageTitle}>Adblock Detected</h4>
          <br />
          <section className={styles.modalMessage}>
            <p className={styles.messageText}>
              It appears that you are using an ad-blocking extension in your
              browser.
            </p>
            <p className={styles.messageText}>
              Please consider supporting us by disabling your ad blocker.
            </p>
          </section>
        </div>
        <div className={styles.refreshButton} onClick={() => handleAdblock()}>
          Refresh Page
        </div>
      </div>
    </div>
  );
};

export default AdBlockNotice;
