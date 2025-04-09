import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'Easy to Use',
      id: 'homepage.feature.easyToUse.title'
    }),
    description: (
      <Translate id="homepage.feature.easyToUse.description">
        With AutoParams, writing tests is easier than ever. Simply add the @AutoParams annotation to your test method, and the parameters will be automatically populated with generated values.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Focus on What Matters',
      id: 'homepage.feature.focusOnWhatMatters.title'
    }),
    description: (
      <Translate id="homepage.feature.focusOnWhatMatters.description">
        Using AutoParams allows you to skip the repetitive work of constructing test data. The required test data is automatically generated, so you can focus on what really matters: your domain-specific requirements.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Enhanced Coverage',
      id: 'homepage.feature.enhancedCoverage.title'
    }),
    description: (
      <Translate id="homepage.feature.enhancedCoverage.description">
        By using random values ​​instead of static data, AutoParams allows your tests to cover a wider range of cases. Each test iteration validates your application under a variety of conditions, uncovering edge cases that might not be noticed with fixed values.
      </Translate>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
