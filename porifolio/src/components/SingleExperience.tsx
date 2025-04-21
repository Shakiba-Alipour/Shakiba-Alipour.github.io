import { LinkOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import "./SingleExperience.css";

export function SingleExperience({
  role,
  company,
  logo,
  url,
  duration,
  description,
}) {
  // put each sentence of the description in a seperate line
  const descriptionLines = description.split(". ").map((line, idx) => (
    <p key={idx} className="experience-description">
      {line.trim()}
    </p>
  ));

  return (
    <div className="experience">
      <img src={logo} className="company-logo" alt={`${company} logo`} />
      <div className="experience-info">
        <div id="company-info">
          <b className="company-name">{company}</b>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="company-website"
          >
            <LinkOutlined />
          </a>
        </div>
        <div id="experience-main-info">
          <h2 className="role">{role}</h2>
          <Tag bordered={false} className="experience-duration">
            {duration}
          </Tag>
        </div>
        <p className="experience-description">{descriptionLines}</p>
      </div>
    </div>
  );
}
