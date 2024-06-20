import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./Navbar.css";

const NavbarItems = [
  {
    key: "about",
    label: "About",
    to: "about-section",
  },
  {
    key: "experiences",
    label: "Experiences",
    to: "experiences-section",
  },
  {
    key: "awards",
    label: "Awards",
    to: "awards-section",
  },
  {
    key: "contact",
    label: "Contact",
    to: "footer-section",
  },
];

export function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 780);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {isMobile ? <MobileNavbarManagement /> : <DesktopNavbarManagement />}
    </nav>
  );
}

function MobileNavbarManagement() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <Link to={"/"} className="nav-item" id="website-name">
        Shakiba Alipour
      </Link>
      <Button
        type="primary"
        id="menu-icon"
        icon={<MenuOutlined />}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="overlay">
          <div className="overlay-content">
            {NavbarItems.map((item) => (
              <div
                key={item.key}
                className="overlay-nav-item"
                onClick={() => handleItemClick(item.to)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopNavbarManagement() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar-container" id="header">
      <Link to={"/"} className="nav-item" id="website-name">
        Shakiba Alipour
      </Link>
      <ul className="nav-menu">
        {NavbarItems.map((item) => (
          <li
            className="nav-link"
            key={item.key}
            onClick={() => handleScroll(item.to)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </header>
  );
}
