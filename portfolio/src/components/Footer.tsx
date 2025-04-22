import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  const logoClassName = "text-2xl mr-8 cursor-pointer hover:text-gray-300";

  return (
    <AntFooter
      id="footer-section"
      className=" absolute p-4 w-full bottom-0 bg-dark-gray text-white"
    >
      <div className="flex flex-row max-sm:flex-col justify-between items-center">
        <div>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/shakiba-alipour"
            target="_blank"
            rel="noopener noreferrer"
            className={logoClassName}
          >
            <LinkedinFilled />
          </a>

          <a
            id="github"
            href="https://github.com/Shakiba-Alipour"
            target="_blank"
            rel="noopener noreferrer"
            className={logoClassName}
          >
            <GithubFilled />
          </a>

          <a
            id="email"
            href="mailto:alipour.sh79@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={logoClassName}
          >
            <MailFilled />
          </a>
        </div>
        <p className="mt-0 max-sm:mt-5">
          @ 2025 Shakiba Alipour. All rights reserved.
        </p>
      </div>
    </AntFooter>
  );
};

export default Footer;
