import React from "react";
import clsx from "clsx";
import styles from "./AboutpageFeatures.module.css";

function LightningIcon() {
  return (
    <svg style={{ maxHeight: 130, marginBottom: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg style={{ maxHeight: 130, marginBottom: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
    </svg>
  );
}

function ComputerIcon() {
  return (
    <svg style={{ maxHeight: 130, marginBottom: 20 }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
    </svg>
  );
}

const FeatureList = [
  {
    title: "Accessibility",
    Svg: LightbulbIcon,
    description: <> Loop is made with ease of use in mind, it's primary target audience is just regular folk. Meaning that each design decision went into being easy!</>,
  },
  {
    title: "Passion for ICT",
    Svg: LightningIcon,
    description: <>Placeholder</>,
  },
  {
    title: "Cross Platform",
    Svg: ComputerIcon,
    description: <> You can use Loop anywhere! Including Windows, Mac & Linux. But also on multiple architectures, like x86_64 and ARM64 </>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center")}>
        <Svg className={styles.featureSvg} alt={title} />{" "}
      </div>{" "}
      <div className={clsx("text--center padding-horiz--md")}>
        <h3> {title} </h3> <p> {description} </p>{" "}
      </div>{" "}
    </div>
  );
}

export default function AboutpageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container")}>
        <div className={styles.row}>
          <h6 className={styles.subHeaderText}>our 3 greatest</h6>
          <h1 className={styles.headerText}>core values</h1>
        </div>
        <div className="row">
          {" "}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

