'use client';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { trackGAEvent } from '@/utils/google-analytics';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>radan dev</h1>
          </div>
          <div className={styles.icons}>
            <Link
              href='mailto:marshalnadarmn18@gmail.com'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() =>
                trackGAEvent('Button Clicks', 'Gmail Button Click', 'Footer')
              }
            >
              <Image src='/gmail.ico' alt='gmail logo' width={20} height={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/in/marshal-nadar'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() =>
                trackGAEvent('Button Clicks', 'Linkedin Button Click', 'Footer')
              }
            >
              <Image
                src='/linkedIn2x.png'
                alt='linkedIn logo'
                width={20}
                height={20}
              />
            </Link>
            <Link
              href='https://www.instagram.com/marshal.nadar/'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() =>
                trackGAEvent(
                  'Button Clicks',
                  'Instagram Button Click',
                  'Footer'
                )
              }
            >
              <Image
                src='/instagram2x.png'
                alt='instagram logo'
                width={20}
                height={20}
              />
            </Link>

            <Link
              href='https://www.facebook.com/giltonmarshal.nadar/'
              rel='noopener noreferrer'
              target='_blank'
              onClick={() =>
                trackGAEvent('Button Clicks', 'Facebook Button Click', 'Footer')
              }
            >
              <Image
                src='/facebook2x.png'
                alt='facebook logo'
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className={styles.links}></div>
      </div>
      <p className={styles.copyrights}>
        Built with ❤️ © 2024 by radan.dev All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
