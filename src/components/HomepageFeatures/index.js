import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modular Architecture',
    Svg: require('@site/static/img/smartfactorycampusnetwork.svg').default,
    description: (
      <>
        Our O-RAN framework is designed with modularity in mind, making it easy to extend, integrate, and customize for your deployment.
      </>
    ),
  },
  {
    title: 'Real-Time Performance',
    Svg: require('@site/static/img/smartfactorycampusnetwork.svg').default,
    description: (
      <>
        High-performance processing ensures low latency and reliable communication for 5G and beyond applications.
      </>
    ),
  },
  {
    title: 'Open-Source Ecosystem',
    Svg: require('@site/static/img/smartfactorycampusnetwork.svg').default,
    description: (
      <>
        Leverage an open-source ecosystem that encourages collaboration, experimentation, and rapid innovation in software-defined radios.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
