import { Experience } from "./Experience";
import { LinkOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { Component } from "react";

// import logos
import FUMLogo from "../assets/logos/FUM.png";
import HamraheAvalLogo from "../assets/logos/hamrahe_aval_logo.png";
import MusicClubLogo from "../assets/logos/Music_Club.jpg";
import KanoonLogo from "../assets/logos/shora_kanoon.png";

const experiencesList = [
  // {
  //   role: "Computer Engineering Student",
  //   company: "FERDOWSI UNIVERSITY OF MASHHAD",
  //   logo: FUMLogo,
  //   url: "https://www.um.ac.ir/",
  //   duration: "2018 - 2023",
  //   description: `Data Mining - Data Structure - Object-Oriented Programming - Algorithm Design - Computer Networks - Artificial Intelligence - Computational Intelligence - Operating Systems - Software Engineering - ...`,
  // },
  // {
  //   role: "Programming Intern",
  //   company: "HAMRAH AVAL (MCI)",
  //   logo: HamraheAvalLogo,
  //   url: "https://mci.ir/",
  //   duration: "Jul 2022 - Sep 2022",
  //   description: `Examinned the configuration of mobile networks and different generations of mobile networks especially the second and the third generation.
  //     Programmed a java application to examine final site survey reports and find the differences per update`,
  // },
  // {
  //   role: "Treasurer",
  //   company:
  //     "CULTURAL, ARTISTIC, RELIGION AND SOCIAL CLUBS OF FERDOWSI UNIVERSITY OF MASHHAD",
  //   logo: KanoonLogo,
  //   url: "https://www.instagram.com/kanoonnews/",
  //   duration: "Dec 2022 - Dec 2023",
  //   description: `Managed all university clubs’ financial transactions.
  //   Managed clubs’ annual budget`,
  // },
  {
    role: "Board Member and Treasurer",
    company: "FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB",
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
    duration: "Nov 2022 - Sep 2023",
    description: `Managed the club’s annual budget.
    Allocated financial resources for the club’s activities and negotiated with sponsors to raise funds.
    Held music festivals.
    Edited articles for Arghanoun magazine of music club.`,
  },
  {
    role: "President",
    company: "FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB",
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
    duration: "Oct 2021 - Oct 2022",
    description: `Arranged weekly team sessions, assigned tasks, and monitored progress.
    Negotiated with music teachers and held 21 music workshops.
    Successfully coordinated communications between the music club team (6 members) and other clubs and university associations to perform programs.
    Trained more than 30 enthusiastic members of the music club and assigned tasks.
    Edited articles for Arghanoun magazine of music club.`,
  },
  {
    role: "Board Member",
    company: "FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB",
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
    duration: "Aug 2020 - Sep 2021",
    description: `Researched and chose appropriate topics for weekly research music discussion meetings.
    Selected and invited professional Iranian musicians to meetings.
    Conducted and performed discussions on Instagram Lives with more than 800 audiences per session.`,
  },
];

export function ExperiencesList() {
  // const experienceComponents = [];
  // for (let i = 0; i < experiencesList.length; i++) {
  //   const exp = experiencesList[i];
  //   experienceComponents.push(
  //     <Experience
  //       key={i}
  //       role={exp.role}
  //       company={exp.company}
  //       logo={exp.logo}
  //       url={exp.url}
  //       duration={exp.duration}
  //       description={exp.description}
  //     />
  //   );

  return (
    <div>
      <h1 className="title">Experiences</h1>
      <SingleExperience
        role="Computer Engineering Student"
        company="FERDOWSI UNIVERSITY OF MASHHAD"
        logo={FUMLogo}
        url="https://www.um.ac.ir/"
        duration="2018 - 2023"
        description="Data Mining - Data Structure - Object-Oriented Programming - Algorithm Design - Computer Networks - Artificial Intelligence - Computational Intelligence - Operating Systems - Software Engineering - ..."
      />
      <SingleExperience
        role="Programming Intern"
        company="HAMRAH AVAL (MCI)"
        logo={HamraheAvalLogo}
        url="https://mci.ir/"
        duration="Jul 2022 - Sep 2022"
        description="Examinned the configuration of mobile networks and different generations of mobile networks especially the second and the third generation.Programmed a java application to examine final site survey reports and find the differences per update"
      />
      <SingleExperience
        role="Treasurer"
        company="CULTURAL, ARTISTIC, RELIGION AND SOCIAL CLUBS OF FERDOWSI UNIVERSITY OF MASHHAD"
        logo={KanoonLogo}
        url="https://www.instagram.com/kanoonnews/"
        duration="Dec 2022 - Dec 2023"
        description="Managed all university clubs’ financial transactions.Managed clubs’ annual budget"
      />

      <MusicClubExperiences items={ExperiencesList} />
    </div>
  );
}

// return (
//   <div>
//     <h2 className="title">Experiences</h2>
//     {/* {experiencesList.map((exp, index) => {
//       <Experience
//         key={index}
//         role={exp.role}
//         company={exp.company}
//         logo={exp.logo}
//         url={exp.url}
//         duration={exp.duration}
//         description={exp.description}
//       ></Experience>;
//     })} */}
//     {experienceComponents}
//   </div>
// );
// }

function SingleExperience({ role, company, logo, url, duration, description }) {
  return (
    <div className="experience">
      <img src={logo} className="experience-logo" alt={`${company} logo`} />
      <div className="experience-info">
        <b className="experience-title">{company}</b>

        <a href={url} target="_blank" rel="noopener noreferrer">
          {/* <LinkOutlined className="company-logo" /> */}
        </a>
        <h2 className="role">{role}</h2>
        <p className="experience-duration">{duration}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}

function MusicClubExperiences(experiences) {
  return (
    <div>
      <Timeline items={experiences}>
        <Timeline.Item>
          <SingleExperience
            role="Board Member and Treasurer"
            company="FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB"
            logo={MusicClubLogo}
            url="https://www.instagram.com/ferdowsi_music_club/"
            duration="Nov 2022 - Sep 2023"
            description="Managed the club’s annual budget.
             Allocated financial resources for the club’s activities and negotiated with sponsors to raise funds.Held music festivals.Edited articles for Arghanoun magazine of music club."
          />
        </Timeline.Item>
        <Timeline.Item>
          <SingleExperience
            role="President"
            company="FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB"
            logo={MusicClubLogo}
            url="https://www.instagram.com/ferdowsi_music_club/"
            duration="Oct 2021 - Oct 2022"
            description="Arranged weekly team sessions, assigned tasks, and monitored progress.
            Negotiated with music teachers and held 21 music workshops.
            Successfully coordinated communications between the music club team (6 members) and other clubs and university associations to perform programs.
            Trained more than 30 enthusiastic members of the music club and assigned tasks.
            Edited articles for Arghanoun magazine of music club."
          />
        </Timeline.Item>
        <Timeline.Item>
          <SingleExperience
            role="Board Member"
            company="FERDOWSI UNIVERSITY OF MASHHAD MUSIC CLUB"
            logo={MusicClubLogo}
            url="https://www.instagram.com/ferdowsi_music_club/"
            duration="Aug 2020 - Sep 2021"
            description="Researched and chose appropriate topics for weekly research music discussion meetings.
            Selected and invited professional Iranian musicians to meetings.
            Conducted and performed discussions on Instagram Lives with more than 800 audiences per session."
          />
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
