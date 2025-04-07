import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures/HomepageFeatures';
import HomepageAbout from '@site/src/components/HomepageAbout/HomepageAbout';
import styles from './index.module.css';
import Hero from '@site/src/components/Hero/Hero';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Shopify Partner`}
      description="We build the technical solutions that merchants and agencies need when Shopify's native capabilities fall short, continuously improving based on merchants feedback."
    >
      <Hero />

      <main className={styles.main}>
        <div className={styles.mainInner}>
          <HomepageAbout />
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
