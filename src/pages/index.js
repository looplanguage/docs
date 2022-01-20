import React from "react";
import ThemedImage from '@theme/ThemedImage';
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import "../theme/dracula-prism.css";
import codeShotsDM from "../../static/img/codeshots.png"
import codeShotsNM from "../../static/img/codeshotsNM.png"
import HomepagePartners from "../components/HomepagePartners";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <span className={styles.heroTitleTextHtml}>
              A <b>dynamic</b>, type-safe programming language
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/usage/installation">
              <div>Get Started</div>
            </Link>
            {/* <Link className="button button--info" to="https://github.com/looplanguage/loop/releases/latest">
              <div>Download</div>
            </Link> */}
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe className={styles.indexCtasGitHubButton} src="https://ghbtns.com/github-btn.html?user=looplanguage&amp;repo=loop&amp;type=star&amp;count=true&amp;size=large" width={160} height={30} title="GitHub Stars" />
            </span>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* add image here */}
          <ThemedImage
          alt="Code snippets Loop Language" 
            sources={{
              light: codeShotsDM,
              dark: codeShotsNM,
            }}
            className={styles.codeIMG}>
              </ThemedImage>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>{" "}
    </Layout>
  );
}
