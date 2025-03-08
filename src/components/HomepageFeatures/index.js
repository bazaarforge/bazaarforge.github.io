import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Smart Collection Pro',
    subtitle: "Supercharged Smart Collections",
    SvgSrc: "/img/smp-logo.svg",
    description: (
      <>
        Take Shopify collections to the next level with advanced conditions, auto-syncing and hierarchy.
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
          <Heading as="h3">{title}</Heading>
          <Heading as="h4">{subtitle}</Heading>
          <p>{description}</p>
          <div>
            <Link className="button button--secondary" href="/docs/smart-collection-pro/intro">User Guide</Link>
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
