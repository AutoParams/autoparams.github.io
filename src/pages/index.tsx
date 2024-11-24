import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageCodeExamples from '../components/HomepageCodeExamples';
import HeadingDecoration from '../components/HeadingDecoration';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <HeadingDecoration />
        <div className={styles.heading}>
          <Heading as="h1" className={clsx('hero__title', styles.headingTitle)}>
            <Translate id="homepage.siteConfig.title">{siteConfig.title}</Translate>
          </Heading>
          <p className="hero__subtitle">
            <Translate id="homepage.siteConfig.tagline">{siteConfig.tagline}</Translate>
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="AutoParams is a versatile test data generator designed for parameterized tests in Java and Kotlin, drawing inspiration from AutoFixture.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCodeExamples />
      </main>
    </Layout>
  );
}
