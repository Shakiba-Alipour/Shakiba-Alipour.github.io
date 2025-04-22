import React from "react";
import { Link } from "react-scroll";

interface NavbarProps {
  NavbarItems: { key: string; label: string; to: string }[];
}

const DesktopNavbar: React.FC<NavbarProps> = ({ NavbarItems }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full py-3 flex flex-row justify-around" id="header">
      <Link to={"/"}>Shakiba Alipour</Link>
      <ul className="w-fit p-0 list-none flex flex-row">
        {NavbarItems.map((item) => (
          <li
            key={item.key}
            className="mx-8"
            onClick={() => handleScroll(item.to)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default DesktopNavbar;
