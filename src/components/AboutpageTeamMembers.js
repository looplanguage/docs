import React from "react";
import clsx from "clsx";
import styles from "./AboutpageTeamMembers.module.css";
import ThemedImage from '@theme/ThemedImage';

// Profile Pictures

import kanePetra from "./../../static/img/team-members/KanePetra.png"
import wouterPennings from "./../../static/img/team-members/WouterPennings.png"
import nealGeilen from "./../../static/img/team-members/NealGeilen.png"
import nickvOoijen from "./../../static/img/team-members/NickvOoijen.png"
import damienKusters from "./../../static/img/team-members/DamienKusters.png"
import jessevdLaar from "./../../static/img/team-members/JessevdLaar.png"
import sefvHalbeek from "./../../static/img/team-members/SefvHalbeek.png"
import manonYkema from "./../../static/img/team-members/ManonYkema.png"

// Social Media
import githubLogoDM from "./../../static/img/githubLogo.png"
import githubLogoNM from "./../../static/img/githubLogoNM.png"
import linkedinLogoDM from "./../../static/img/linkedinLogoDM.png"
import linkedinLogoNM from "./../../static/img/linkedinLogoNM.png"

function GeneratePerson(img, namePic, name, focus, description, displayGithub, githubLink, displayLinkedin, linkedinLink) {
   
  return (
    <li key={namePic}className={styles.listMembers}>
      <img src={img} alt={namePic} className={styles.picMember} />
      <div className={styles.descMembers}>
        <div className={styles.headerMembers}>
          <h2>{name}</h2>
          <h5>{focus}</h5>
        </div>
        <p>{description}</p>
        <div className={styles.socialMedia}>
        <a className={displayGithub} href={githubLink} target="_blank" >  
            <ThemedImage alt="Github Logo"
            sources={{
              light: githubLogoDM,
              dark: githubLogoNM,
            }}
            ></ThemedImage>
          </a>        
          <a className={displayLinkedin} href={linkedinLink} target="_blank" >  
            <ThemedImage alt="LinkedIn Logo"
            sources={{
              light: linkedinLogoDM,
              dark: linkedinLogoNM,
            }}
            ></ThemedImage>
          </a>   
        </div>
      </div>
    </li>
  )
}

// To *NOT SHOW* a social media channel set the display[MEDIA] to styles.no, " "
// To *SHOW* a social media channel, set the display[MEDIA] to styles.yes, "[LINK]"

function TeamMembers(){
  let description = "Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.";

  return [ 
    GeneratePerson(kanePetra, "Profiel foto Kane Petra", "Kane", "Software Engineer + Infrastructure", description, styles.yes, "https://github.com/kanersps", styles.no),
    GeneratePerson(wouterPennings, "Profiel foto Wouter Pennings", "Wouter", "Software Engineer", description, styles.yes, "https://github.com/wouterpennings", styles.no),
    GeneratePerson(nickvOoijen, "Profiel foto Nick van Ooijen", "Nick", "Package Repository Developer", description, styles.yes, "https://github.com/nickonos", styles.no), 
    GeneratePerson(nealGeilen, "Profiel foto Neal Geilen", "Neal", "Software Engineer", description, styles.yes, "https://github.com/NealGeilen", styles.no), 
    GeneratePerson(damienKusters, "Profiel foto Damien Kusters", "Damien", "Package Repository Developer", "Assisted in the LPR Backend architecture design. Developed the Authentication and authorisation capabilities of the Package Repository", styles.yes, "https://github.com/DamienKusters", styles.yes, "https://www.linkedin.com/in/damien-kusters-7baa33197/"), 
    GeneratePerson(sefvHalbeek, "Profiel foto Sef van Halbeek", "Sef", "Brand design", description, styles.yes, "https://github.com/SEFFFFF", styles.no),
    GeneratePerson(jessevdLaar, "Profiel foto Jesse van de Laar","Jesse", "Software Engineer", description, styles.yes, "https://github.com/Jesse2001", styles.no),
    GeneratePerson(manonYkema, "Profiel foto Manon Ykema", "Manon", "Front-end design + development", "Designed and developed the Welcome and Documentation page.", styles.yes, "https://github.com/manontheresa", styles.yes, "https://www.linkedin.com/in/manon-ykema-1708/"), 
  ];
}

export default function AboutpageTeamMembers() {
    var members = TeamMembers();

    return (
        <section>
          <div className={clsx("container")}>
            <div>
              <h6 className={styles.subHeaderText}>meet our</h6>
              <h1 className={styles.headerText}>team members</h1>
            </div>
            <ul>
              {" "}
              {members}{" "}
            </ul>
          </div>{" "}
        </section>
    );
}