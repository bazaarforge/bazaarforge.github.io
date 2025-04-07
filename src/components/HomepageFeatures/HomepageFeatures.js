import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import HomepageBlock from '@site/src/components/HomepageBlock/HomepageBlock';
import { useId } from 'react';

const FeatureList = [
  {
    title: 'Smart Collection Pro',
    subtitle: 'Smart Collections With Advanced Logic',
    SvgSrc: '/img/smp-logo.svg',
    description: (
      <>
        <p>
          Take your Shopify collections to the next level with <b>advanced conditions, auto-syncing and hierarchy</b>.
        </p>
      </>
    ),
  },
];

function Feature({ SvgSrc, title, subtitle, description }) {
  const id = useId();
  return (
    <section className={styles.featureOuter} aria-label={id}>
      <img src={SvgSrc} className={styles.featureSvg} role="img" alt="Smart Collection Pro Logo" />
      <div className={styles.feature}>
        <Link className={styles.title} href="https://apps.shopify.com/smart-collection-pro?locale=fr">
          <h4 id={id}>{title}</h4>
        </Link>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Link className={styles.userGuide} href="/docs/smart-collection-pro/intro">
            <span>User Guide</span>
          </Link>
          <Link className={styles.shopifyAppStore} href="https://apps.shopify.com/smart-collection-pro?locale=fr">
            <img src="/img/shopify/badge-shopify-app-store-light.svg" alt="Available on Shopify App Store" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.HomepageFeatures}>
      <HomepageBlock>
        <div>
          <h3>Our Featured App</h3>
        </div>
        <div className={styles.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </HomepageBlock>
    </div>
  );
}
