import { Timeline } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./SeriesOfExperiences.css";

export function SeriesOfExperiences({ experiences }) {
  // Assuming the first experience has the logo and company information
  const firstExperience = experiences[0];

  return (
    <div className="timeline-container">
      <div id="company-info">
        <img
          src={firstExperience.logo}
          className="company-logo"
          alt={`${firstExperience.company} logo`}
        />
        <b id="company-name">{firstExperience.company}</b>
        <a
          href={firstExperience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="company-website"
        >
          <LinkOutlined />
        </a>
      </div>
      <Timeline id="timeline">
        {experiences.map((experience, index) => (
          <Timeline.Item key={index}>
            <div id="experience">
              <div className="experience-info">
                <div id="experience-main-info">
                  <h2 className="role">{experience.role}</h2>
                  <Tag bordered={false} className="experience-duration">
                    {experience.duration}
                  </Tag>
                </div>
                <div className="experience-description-container">
                  {experience.description.split(". ").map((line, idx) => (
                    <p key={idx} className="experience-description">
                      {line.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
