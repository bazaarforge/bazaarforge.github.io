import styles from './Hero.module.css';
import clsx from 'clsx';
import Fire from './Fire';
import useEmbers from './useEmbers';

export default function Hero() {
  useEmbers();

  return (
    <div className={styles.Hero}>
      <div id="embers"></div>

      <div className={styles.topGlow}></div>
      <div className={styles.topShadow}></div>

      <div className={styles.bottomGlow}></div>

      <div className={clsx(styles.bgImage, styles.left)}></div>
      <div className={clsx(styles.bgImage, styles.right)}></div>
      <div className={styles.heroContent}>
        <h1>
          Bazaar<span className={styles.forgeColor}>Forge</span>
        </h1>
        <h2>
          <span className={styles.forgeColor}>Shopify Tools Forged</span> from Merchants’ Challenges
          {/*<span className={styles.forgeColor}>Forging Shopify Tools</span> for Merchants on the Front Lines*/}
        </h2>
      </div>

      <Fire />
    </div>
  );
}
