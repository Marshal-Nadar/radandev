import styles from './homepage.module.css';
import Featured from '@/components/Featured/Featured';
import Singleblog from '@/components/Singleblog/Singleblog';

export default function Page() {
  return (
    <div className={styles.container}>
      <Featured />
      <div className={styles.content}>
        <Singleblog />
      </div>
    </div>
  );
}
