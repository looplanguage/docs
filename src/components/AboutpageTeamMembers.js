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
import githubLogoDM from "./../../static/img/social-media/githubLogo.png"
import githubLogoNM from "./../../static/img/social-media/githubLogoNM.png"
import linkedinLogoDM from "./../../static/img/social-media/linkedinLogoDM.png"
import linkedinLogoNM from "./../../static/img/social-media/linkedinLogoNM.png"
import twitterLogoDM from "./../../static/img/social-media/twitterLogoDM.png"
import twitterLogoNM from "./../../static/img/social-media/twitterLogoNM.png"
import portfolioLogoDM from "./../../static/img/social-media/portfolioLogoDM.png"
import portfolioLogoNM from "./../../static/img/social-media/portfolioLogoNM.png"

// Switch Case Numbers
const githubInfo = 0
const linkedinInfo = 1
const twitterInfo = 2
const portfolioInfo = 3

class SMInfo{
  constructor(imageLight, imageDark, alt){
    this.imageLight = imageLight
    this.imageDark = imageDark
    this.alt = alt
  }
}

class SocialMediaLink{
  constructor(url, infoId){
    this.url = url
    let info = this.GetInfo(infoId)
    this.imageLight = info.imageLight
    this.imageDark = info.imageDark
    this.alt = info.alt
  }

  GetInfo(infoId){
    switch(infoId){
      case githubInfo:
        return new SMInfo(githubLogoDM, githubLogoNM, "GitHub Social Media Icon")
      case linkedinInfo:
        return new SMInfo(linkedinLogoDM, linkedinLogoNM, "LinkedIn Social Media Icon")
      case twitterInfo: 
        return new SMInfo(twitterLogoDM, twitterLogoNM, "Twitter Social Media Icon")
      case portfolioInfo: 
        return new SMInfo(portfolioLogoDM, portfolioLogoNM, "Portfolio Icon")
    }
  }
}

function GeneratePerson(img, namePic, name, focus, description, socialMediaLinks) {
   
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
        
        {socialMediaLinks.map(socialMediaLink=>(
          <a href={socialMediaLink.url} target="_blank" >  
            <ThemedImage alt={socialMediaLink.alt}
            sources={{
              light: socialMediaLink.imageLight,
              dark: socialMediaLink.imageDark,
            }}
            ></ThemedImage>
          </a>   
        ))}
        </div>
      </div>
    </li>
  )
}

function TeamMembers(){
  let description = "Testimonials. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.";

  return [ 
    GeneratePerson(kanePetra, "Profiel foto Kane Petra", "Kane", "Lead Maintainer", "Responsible for the main Loop repositories, its official libraries and final decisions within the project.", [new SocialMediaLink("https://github.com/kanersps", githubInfo), new SocialMediaLink("https://www.linkedin.com/in/kane-petra-a05bb8158/", linkedinInfo), new SocialMediaLink("https://twitter.com/Kanersps", twitterInfo)]),//
    GeneratePerson(wouterPennings, "Profiel foto Wouter Pennings", "Wouter", "Maintaining + developing Loop", "I am a maintainer for the project. Developing Loop and supporting its sub-projects.", [new SocialMediaLink("https://github.com/wouterpennings", githubInfo), new SocialMediaLink("https://www.linkedin.com/in/wouter-pennings-6808211b5/", linkedinInfo), new SocialMediaLink("https://www.wouterpennings.com/", portfolioInfo)]),
    GeneratePerson(nickvOoijen, "Profiel foto Nick van Ooijen", "Nick", "Package Repository Developer", description, [new SocialMediaLink("https://github.com/nickonos", githubInfo)]), 
    GeneratePerson(nealGeilen, "Profiel foto Neal Geilen", "Neal", "Software Engineer", description, [new SocialMediaLink("https://github.com/NealGeilen", githubInfo)]), 
    GeneratePerson(damienKusters, "Profiel foto Damien Kusters", "Damien", "Package Repository Developer", "Assisted in the LPR Backend architecture design. Developed the Authentication and authorisation capabilities of the Package Repository", [new SocialMediaLink("https://github.com/DamienKusters", githubInfo), new SocialMediaLink("https://www.linkedin.com/in/damien-kusters-7baa33197/", linkedinInfo)]), 
    GeneratePerson(sefvHalbeek, "Profiel foto Sef van Halbeek", "Sef", "Brand design", description, [new SocialMediaLink("https://github.com/SEFFFFF", githubInfo)]),
    GeneratePerson(jessevdLaar, "Profiel foto Jesse van de Laar","Jesse", "Software Engineer", description, [new SocialMediaLink("https://github.com/Jesse2001", githubInfo)]),
    GeneratePerson(manonYkema, "Profiel foto Manon Ykema", "Manon", "Front-end", "Designed and developed the Welcome and Documentation page.", [new SocialMediaLink("https://github.com/manontheresa", githubInfo), new SocialMediaLink("https://www.linkedin.com/in/manon-ykema-1708/", linkedinInfo), new SocialMediaLink("https://www.manontheresa.com/", portfolioInfo)] ),
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