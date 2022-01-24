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

function GeneratePerson(img, name, github, focus, description) {
  return (
    <li className={styles.listMembers}>
      <img src={img} alt="Profiel foto Manon Ykema" className={styles.picMember} />
      <div className={styles.descMembers}>
        <div className={styles.headerMembers}>
          <a href={github} target="_blank">  
            <ThemedImage alt="Github Logo"
            sources={{
              light: githubLogoDM,
              dark: githubLogoNM,
            }}
            ></ThemedImage>
          </a>
          <h2>{name}</h2>
          <h5>{focus}</h5>
        </div>
        <p>{description}</p>
      </div>
    </li>
  )
}

function TeamMembers(){
  let description = "Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.";

  return [ 
    GeneratePerson(kanePetra, "Kane", "https://github.com/kanersps", "Software Engineer + Infrastructure", description),
    GeneratePerson(wouterPennings, "Wouter", "https://github.com/wouterpennings", "Software Engineer", description),
    GeneratePerson(nickvOoijen, "Nick", "https://github.com/nickonos", "Software Engineer", description), 
    GeneratePerson(nealGeilen, "Neal", "https://github.com/NealGeilen", "Software Engineer", description), 
    GeneratePerson(damienKusters, "Damien", "https://github.com/DamienKusters", "Software Engineer", description), 
    GeneratePerson(sefvHalbeek, "Sef", "https://github.com/SEFFFFF", "Brand design", description),
    GeneratePerson(jessevdLaar,"Jesse", "https://github.com/Jesse2001", "Software Engineer", description),
    GeneratePerson(manonYkema, "Manon", "https://github.com/manontheresa", "Front-end design + development", description), 
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
              {members.map((element) => (
                element
              ))}{" "}
            </ul>
          </div>{" "}
        </section>
    );
}