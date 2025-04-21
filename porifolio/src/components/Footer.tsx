import { Layout } from "antd";
import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons";
import "./Footer.css";

const { Footer: AntFooter } = Layout;

export function Footer() {
  return (
    <AntFooter className="footer" id="footer-section">
      <div id="footer_container">
        <div id="logo_container">
          <a
            id="linkedin"
            className="logo"
            href="https://www.linkedin.com/in/shakiba-alipour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled />
          </a>

          <a
            id="github"
            className="logo"
            href="https://github.com/Shakiba-Alipour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubFilled />
          </a>

          <a
            id="email"
            className="logo"
            href="mailto:alipour.sh79@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailFilled />
          </a>
        </div>
        <p id="copy-right">@ 2024 Shakiba Alipour. All rights reserved.</p>
      </div>
    </AntFooter>
  );
}
