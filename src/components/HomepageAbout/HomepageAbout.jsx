import styles from './HomepageAbout.module.css';
import clsx from 'clsx';
import HomepageBlock from '@site/src/components/HomepageBlock/HomepageBlock';

export default function HomepageAbout() {
  return (
    <div className={styles.About}>
      <HomepageBlock>
        <h3>About Us</h3>
        <p>
          We're a Shopify Partner based in Prague, Czechia.
          <br /> We build the technical solutions that merchants and agencies need when Shopify's native capabilities fall short, continuously
          improving based on merchants feedback.
        </p>
        <h3>Contact Us</h3>
        <p>
          An enquire? Contact us at <a href="mailto:hello@bazaarforge.com">hello@bazaarforge.com</a>.
        </p>
      </HomepageBlock>
    </div>
  );
}
