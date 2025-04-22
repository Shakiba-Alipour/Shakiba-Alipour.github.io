import { Timeline } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Tag } from "antd";

const SeriesOfExperiences = ({
  experiences,
  containerStyle,
}: {
  experiences: {
    role: string;
    company: string;
    logo: string;
    url: string;
    duration: string;
    description: string;
  }[];
  containerStyle: string;
}) => {
  // Assuming the first experience has the logo and company information
  const firstExperience = experiences[0];

  return (
    <div className={`${containerStyle} flex-col`}>
      <div className="flex flex-row max-sm:flex-col text-gray-600 items-center">
        <img
          src={firstExperience.logo}
          className="w-28 mr-10"
          alt={`${firstExperience.company} logo`}
        />
        <a
          href={firstExperience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <b className="mr-2">{firstExperience.company}</b>
          <LinkOutlined />
        </a>
      </div>
      <Timeline className="mx-10 mt-14">
        {[...experiences].reverse().map(
          (
            experience: {
              role: string;
              duration: string;
              description: string;
            },
            index: number
          ) => (
            <Timeline.Item key={index} color="red">
              <div>
                <div>
                  <div className="flex flex-row max-sm:flex-col w-full justify-between">
                    <h2 className="font-bold text-xl">{experience.role}</h2>
                    <Tag bordered={false} className="font-bold text-base">
                      {experience.duration}
                    </Tag>
                  </div>
                  <div className="w-3/4">
                    {experience.description.split(". ").map((line, idx) => (
                      <p key={idx}>{line.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Timeline.Item>
          )
        )}
      </Timeline>
    </div>
  );
};

export default SeriesOfExperiences;
