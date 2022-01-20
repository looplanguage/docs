// Companies that use Loop Language component
// Current images that are being used are examples, not real companies. Please change when loading in the component. :) 


import React from "react";
import clsx from "clsx";
import ThemedImage from '@theme/ThemedImage';
import styles from "./HomepagePartners.module.css";

// Images Import Amazon
import amazonDM from "../../static/img/partners/amazon.png"
import amazonNM from "../../static/img/partners/amazonNM.png"

// Images Import Netflix 
import netflixDM from "../../static/img/partners/netflix.png"
import netflixNM from "../../static/img/partners/netflixNM.png"

// Images Import Fontys 
import fontysDM from "../../static/img/partners/fontys.png"
import fontysNM from "../../static/img/partners/fontysNM.png"

// Images Import Atlassian 
import atlassianDM from "../../static/img/partners/atlassian.png"
import atlassianNM from "../../static/img/partners/atlassianNM.png"

// Images Import Teamviewer 
import teamviewerDM from "../../static/img/partners/teamviewer.png"
import teamviewerNM from "../../static/img/partners/teamviewerNM.png"

// Images Import Delta 
import deltaDM from "../../static/img/partners/delta.png"
import deltaNM from "../../static/img/partners/deltaNM.png"


function amazonPartner() {
    return (
        <ThemedImage
        alt="Amazon Partner Loop Language" 
          sources={{
            light: amazonDM,
            dark: amazonNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

function netflixPartner() {
    return (
        <ThemedImage
        alt="Netflix Partner Loop Language" 
          sources={{
            light: netflixDM,
            dark: netflixNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

function fontysPartner() {
    return (
        <ThemedImage
        alt="Fontys Partner Loop Language" 
          sources={{
            light: fontysDM,
            dark: fontysNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

function atlassianPartner() {
    return (
        <ThemedImage
        alt="Atlassian Partner Loop Language" 
          sources={{
            light: atlassianDM,
            dark: atlassianNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

function teamviewerPartner() {
    return (
        <ThemedImage
        alt="Teamviewer Partner Loop Language" 
          sources={{
            light: teamviewerDM,
            dark: teamviewerNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

function deltaPartner() {
    return (
        <ThemedImage
        alt="Delta Partner Loop Language" 
          sources={{
            light: deltaDM,
            dark: deltaNM,
          }}
          className={styles.partnerIMG}>
            </ThemedImage>
    )
}

const PartnersList = [
    {
        alt: "Amazon Logo",
        ThemedImage: amazonPartner, 
    }, 
    {
        alt: "Netflix Logo", 
        ThemedImage: netflixPartner, 
    }, 
    {
        alt: "Fontys Logo", 
        ThemedImage: fontysPartner, 
    }, 
    {
        alt: "Atlassian Logo",
        ThemedImage: atlassianPartner, 
    }, 
    {
        alt: "Teamviewer Logo", 
        ThemedImage: teamviewerPartner, 
    }, 
    {
        alt: "Delta FHICT Logo", 
        ThemedImage: deltaPartner, 
    }
]; 

function Partners({ ThemedImage, alt }){
    return (
        <div className={clsx("col col--2")}>
      <div className={clsx("text--center")}>
        <ThemedImage alt={alt} className={styles.partnerIMG} />{" "}
      </div>{" "}
    </div>
    );
}

export default function HomepagePartners() {
    return (
        <section>
          <div className={clsx("container")}>
            <div>
              <h6 className={styles.subHeaderText}>companies that use</h6>
              <h1 className={styles.headerText}>loop language</h1>
            </div>
            <div className={clsx("row")}>
              {" "}
              {PartnersList.map((props, idx) => (
                <Partners key={idx} {...props} />
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>
      );
}