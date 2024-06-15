import { LinkOutlined } from "@ant-design/icons";

export function SingleExperience({
  role,
  company,
  logo,
  url,
  duration,
  description,
}) {
  return (
    <div className="experience">
      <img src={logo} className="experience-logo" alt={`${company} logo`} />
      <div className="experience-info">
        <b className="experience-title">{company}</b>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <LinkOutlined className="company-logo" />
        </a>
        <h2 className="role">{role}</h2>
        <p className="experience-duration">{duration}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}
