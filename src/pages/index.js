import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" >
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Shopify Partner`}
      description="We build the technical solutions that merchants and agencies need when Shopify's native capabilities fall short, continuously improving based on merchants feedback.">
      <HomepageHeader />
      <main className={styles.main}>
          <p className={styles.description}>
            We build the technical solutions that merchants and agencies need when Shopify's native capabilities fall short, continuously improving based on merchants feedback.
          </p>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
