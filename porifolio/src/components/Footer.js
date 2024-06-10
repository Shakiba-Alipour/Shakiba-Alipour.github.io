import { LinkedinFilled, GithubFilled, MailFilled } from "@ant-design/icons";
import "./Footer.css";

export function Footer() {
  return (
    <Footer className="footer">
      <div id="footer_container">
        <div id="logo_container">
          <a
            id="linkedin"
            className="logo"
            href="https://www.linkedin.com/in/shakiba-alipour"
            target="_blank"
          >
            <LinkedinFilled />
          </a>

          <a
            id="github"
            className="logo"
            href="https://github.com/Shakiba-Alipour"
            target="_blank"
          >
            <GithubFilled />
          </a>

          <a
            id="email"
            className="logo"
            href="alipour.sh79@gmail.com"
            target="_blank"
          >
            <MailFilled />
          </a>
        </div>
        <p id="copy-right">@ 2024 Shakiba Alipour. All rights reserved.</p>
      </div>
    </Footer>
  );
}
