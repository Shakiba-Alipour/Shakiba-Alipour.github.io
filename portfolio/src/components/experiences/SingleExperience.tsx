import { LinkOutlined } from "@ant-design/icons";
import { Tag } from "antd";

const SingleExperience = ({
  role,
  company,
  logo,
  url,
  duration,
  description,
  containerStyle,
}: {
  role: string;
  company: string;
  logo: string;
  url: string;
  duration: string;
  description: string;
  containerStyle: string;
}) => {
  // put each sentence of the description in a seperate line
  const descriptionLines = description
    .split(". ")
    .map((line, idx) => <p key={idx}>{line.trim()}</p>);

  return (
    <div className={containerStyle}>
      <img src={logo} className="w-28" alt={`${company} logo`} />
      <div className="w-full mx-10">
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-500"
          >
            <b className="mr-2">{company}</b>

            <LinkOutlined />
          </a>
        </div>
        <div className="w-full flex flex-row max-sm:flex-col justify-between">
          <h2 className="font-bold text-xl">{role}</h2>
          <Tag bordered={false} className="font-bold text-base">
            {duration}
          </Tag>
        </div>
        <p className="w-3/4">{descriptionLines}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
