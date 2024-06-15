import { Timeline } from "antd";
import { LinkOutlined } from "@ant-design/icons";

export function SeriesOfExperiences(
  index,
  role,
  company,
  logo,
  url,
  duration,
  description
) {
  return (
    <div className="experience">
      {index === 0 && (
        <img src={logo} className="company-logo" alt={`${company} logo`} />
      )}
      <div className="experience-info">
        {index === 0 && (
          <>
            <b className="experience-title">{company}</b>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <LinkOutlined />
            </a>
          </>
        )}
        <h2 className="role">{role}</h2>
        <p className="experience-duration">{duration}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}
