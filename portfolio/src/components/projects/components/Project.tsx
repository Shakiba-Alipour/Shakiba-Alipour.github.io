import { ExportOutlined, GithubOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface ProjectProps {
  title: string;
  githubLink: string;
  websiteLink: string;
  image: any;
  description: string;
  tech: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  githubLink,
  websiteLink,
  image,
  description,
  tech,
}) => {
  return (
    <Card
      className="w-full my-5"
      cover={<img src={image} alt={title} className="w-10 max-h-60" />}
      actions={[
        <GithubOutlined
          key="github"
          href={githubLink}
          target="_blank"
          className="cursor-pointer hover:!text-red-400"
        />,
        <ExportOutlined
          key="website"
          href={websiteLink}
          target="_blank"
          className="cursor-pointer hover:!text-red-400"
        />,
      ]}
    >
      <Meta title={title} description={description} />
      <ul className="flex flex-row">
        {tech.map((t) => (
          <li className="mt-4 mx-4 px-4 py-2 bg-gray-200 rounded-md bg-opacity-100">
            {t}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Project;
