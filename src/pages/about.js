import React from "react";
import ThemedImage from '@theme/ThemedImage';
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./about.module.css";
import AboutpageFeatures from "../components/AboutpageFeatures";
import "../theme/dracula-prism.css";
import aboutPicture from "../../static/img/about.png"
import AboutpageTeamMembers from "../components/AboutpageTeamMembers";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <span className={styles.heroTitleTextHtml}>
              A <b>modern</b>, team that fits within a <b>modern</b> language. 
            </span>
          </h1>
        </div>
        <div className={styles.heroImage}>
          {/* add image here */}
          <img src={aboutPicture} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Loop Languguag About Page. Meat the Loop team, and core values!">
      <HomepageHeader />
      <main>
        <AboutpageFeatures />
        <AboutpageTeamMembers />
      </main>{" "}
    </Layout>
  );
}
