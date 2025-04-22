import { useEffect, useState } from "react";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const logoClassName = "text-2xl mx-2 cursor-pointer hover:text-gray-300";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 780);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-dark-gray text-white text-lg fixed z-50 h-16 flex items-center justify-between px-40 max-sm:px-5">
      <Link to={"/"} className="">
        Shakiba Alipour
      </Link>
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
    </nav>
  );
};

export default Navbar;
