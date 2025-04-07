import styles from './HomepageBlock.module.css';

export default function HomepageBlock({ children }) {
  return <div className={styles.Block}>{children}</div>;
}
