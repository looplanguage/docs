import React from "react";
import clsx from "clsx";
import styles from "./AboutpageTeamMembers.module.css";
import ThemedImage from '@theme/ThemedImage';


// first create functions
// then array 
// then function for loading the array 
// the export 

import kanePetra from "./../../static/img/team-members/KanePetra.png"
import wouterPennings from "./../../static/img/team-members/WouterPennings.png"
import nealGeilen from "./../../static/img/team-members/NealGeilen.png"
import nickvOoijen from "./../../static/img/team-members/NickvOoijen.png"
import damienKusters from "./../../static/img/team-members/DamienKusters.png"
import jessevdLaar from "./../../static/img/team-members/JessevdLaar.png"
import sefvHalbeek from "./../../static/img/team-members/SefvHalbeek.png"
import manonYkema from "./../../static/img/team-members/ManonYkema.png"
import githubLogoDM from "./../../static/img/githubLogo.png"
import githubLogoNM from "./../../static/img/githubLogoNM.png"

function KanePetra() { 
    return (
        <li className={styles.listMembers}>
            <img src={kanePetra} alt="Profiel foto Kane Petra" className={styles.picMember} />
            <div className={styles.descMembers}>
                <div className={styles.headerMembers}>
            <a href="https://github.com/kanersps" target="_blank">  
                <ThemedImage alt="Github Logo"
                sources={{
                  light: githubLogoDM,
                  dark: githubLogoNM,
                }}
                ></ThemedImage>
            </a>
            <h2>Kane Petra</h2>
            <h5>Software Engineer + Infrastructure</h5>
            </div>
            <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
            </div>
            </li>
    )
}

function WouterPennings() { 
  return (
      <li className={styles.listMembers}>
          <img src={wouterPennings} alt="Profiel foto Wouter Pennings" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/WouterPennings" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Wouter Pennings</h2>
          <h5>Software Engineer</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function NealGeilen() { 
  return (
      <li className={styles.listMembers}>
          <img src={nealGeilen} alt="Profiel foto Neal Geilen" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/NealGeilen" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Neal Geilen</h2>
          <h5>Software Engineer</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function NickvOoijen() { 
  return (
      <li className={styles.listMembers}>
          <img src={nickvOoijen} alt="Profiel foto Nick van Ooijen" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/nickonos" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Nick van Ooijen</h2>
          <h5>Software Engineer</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function DamienKusters() { 
  return (
      <li className={styles.listMembers}>
          <img src={damienKusters} alt="Profiel foto Damien Kusters" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/DamienKusters" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Damien Kusters</h2>
          <h5>Software Engineer</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function JessevdLaar() { 
  return (
      <li className={styles.listMembers}>
          <img src={jessevdLaar} alt="Profiel foto Jesse van de Laar" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/Jesse2001" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Jesse van de Laar</h2>
          <h5>Software Engineer</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function SefvHalbeek() { 
  return (
      <li className={styles.listMembers}>
          <img src={sefvHalbeek} alt="Profiel foto Sef van Halbeek" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/SEFFFFF" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Sef van Halbeek</h2>
          <h5>Brand design</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

function ManonYkema() { 
  return (
      <li className={styles.listMembers}>
          <img src={manonYkema} alt="Profiel foto Manon Ykema" className={styles.picMember} />
          <div className={styles.descMembers}>
              <div className={styles.headerMembers}>
          <a href="https://github.com/manontheresa" target="_blank">  
              <ThemedImage alt="Github Logo"
              sources={{
                light: githubLogoDM,
                dark: githubLogoNM,
              }}
              ></ThemedImage>
          </a>
          <h2>Manon Ykema</h2>
          <h5>Front-end design + development</h5>
          </div>
          <p>Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          </div>
          </li>
  )
}

const TeamMemberList = [
    {
        NodeList: KanePetra, 
    },
    {
        NodeList: WouterPennings, 
    },
    {
      NodeList: NealGeilen, 
    },
    {
      NodeList: NickvOoijen, 
    },
    {
      NodeList: DamienKusters, 
    },
    {
      NodeList: JessevdLaar, 
    },
    {
      NodeList: SefvHalbeek, 
    },
    {
      NodeList: ManonYkema, 
    },
]

function TeamMembers({ NodeList }){
    return (
        <NodeList /> 
    );
}

export default function AboutpageTeamMembers() {
    return (
        <section>
          <div className={clsx("container")}>
            <div>
              <h6 className={styles.subHeaderText}>meet our</h6>
              <h1 className={styles.headerText}>team members</h1>
            </div>
            <ul>
              {" "}
              {TeamMemberList.map((props, idx) => (
                <TeamMembers key={idx} {...props} />
              ))}{" "}
            </ul>
          </div>{" "}
        </section>
      );
}