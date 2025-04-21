import React from "react";
import "./About.css";

export function About() {
  return (
    <div className="about-section" id="about-section">
      <div id="about-container">
        <div className="about-item" id="about-description">
          <h2 className="title">About Me</h2>
          <p>
            I'm a junior computer engineer with a deep passion for software
            engineering, web development, and problem-solving. Fascinated by the
            endless possibilities that technology offers, I'm committed to
            mastering the art of software engineering. Beyond my technical
            skills, I am deeply interested in team management and fostering
            collaborative environments. I believe that the best solutions come
            from diverse perspectives and strong teamwork. I strive to approach
            every project with a multidisciplinary mindset, blending creativity
            with analytical thinking. I am open to job opportunities where I can
            grow and look forward to the possibility of collaborating on future
            projects. Let's build something amazing together!
          </p>
        </div>
        <div className="about-item">
          <div id="programming-skills" className="skills">
            <h2>Programming Skills</h2>
            <ul className="skills-list">
              <li className="skill-item">C</li>
              <li className="skill-item">Java</li>
              <li className="skill-item">Python</li>
              <li className="skill-item">HTML</li>
              <li className="skill-item">CSS</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">Node.js</li>
              <li className="skill-item">React</li>
              <li className="skill-item">Git</li>
            </ul>
          </div>
          <div id="soft-skills" className="skills">
            <h2>Soft Skills</h2>
            <ul className="skills-list">
              <li className="skill-item">Teamwork</li>
              <li className="skill-item">Leadership</li>
              <li className="skill-item">Creativity</li>
              <li className="skill-item">Problem-Solving</li>
              <li className="skill-item">Budget Management</li>
              <li className="skill-item">Effective Communications</li>
              <li className="skill-item">Patience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
