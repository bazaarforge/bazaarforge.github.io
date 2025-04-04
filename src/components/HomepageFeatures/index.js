import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Smart Collection Pro',
    subtitle: "Smart Collections With Advanced Logic",
    SvgSrc: "/img/smp-logo.svg",
    description: (
      <>
        Get the collection management control Shopify's native tools couldn't provide. Take your Shopify collections to
        the next level with advanced conditions, auto-syncing and hierarchy.
      </>
    ),
  },
];

function Feature({SvgSrc, title, subtitle, description}) {
  return (
    <div className={clsx('col col--8 col--offset-2')}>
      <div className={styles.feature}>
        <div className="text--center">
          <img src={SvgSrc} className={styles.featureSvg} role="img"/>
        </div>
        <div className="padding-horiz--md">
          <Link className={styles.title} href="https://apps.shopify.com/smart-collection-pro?locale=fr"><Heading
            as="h3">{title}</Heading></Link>
          <Heading as="h4" className={styles.subtitle}>{subtitle}</Heading>
          <p>{description}</p>
          <div className={styles.buttons}>
            <Link className={styles.shopifyAppStore} href="https://apps.shopify.com/smart-collection-pro?locale=fr"><img
              src="/img/shopify/badge-shopify-app-store-light.svg"/></Link>
            <Link className="" href="/docs/smart-collection-pro/intro">User Guide</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <div>
        <Heading as="h2" className="text--center">
          Our featured app
        </Heading>
      </div>
      <section className={styles.features}>

        <div className="container">
          <div className="row justify-content-center">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
