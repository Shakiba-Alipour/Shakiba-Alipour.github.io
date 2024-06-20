import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { Button } from "antd";

const handleScroll = (event, id) => {
  event.preventDefault();
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};

const NavbarItems = [
  {
    key: "about",
    label: (
      <Link
        to={"#about-section"}
        className="nav-links"
        smooth={true}
        duration={500}
        rel="noopener noreferrer"
        onClick={(e) => handleScroll(e, "about-section")}
      >
        About
      </Link>
    ),
  },
  {
    key: "/#experiences",
    label: (
      <Link
        to={"#experiences-section"}
        className="nav-links"
        smooth={true}
        duration={500}
        rel="noopener noreferrer"
        onClick={(e) => handleScroll(e, "experiences-section")}
      >
        Experiences
      </Link>
    ),
  },
  {
    key: "awards",
    label: (
      <Link
        to={"#awards-section"}
        className="nav-links"
        smooth={true}
        duration={500}
        rel="noopener noreferrer"
        onClick={(e) => handleScroll(e, "awards-section")}
      >
        Awards
      </Link>
    ),
  },
  {
    key: "contact",
    label: (
      <Link
        to={"#footer-section"}
        className="nav-links"
        smooth={true}
        duration={500}
        rel="noopener noreferrer"
        onClick={(e) => handleScroll(e, "footer-section")}
      >
        Contact
      </Link>
    ),
  },
];

export function Navbar() {
  // Consider different navbar for mobile phones
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

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
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
        <div className={`overlay ${isMenuOpen ? "active" : ""}`}>
          <div className="overlay-content">
            {NavbarItems.map((item) => (
              <div
                key={item.key}
                className="overlay-nav-item"
                onClick={handleMenuClick}
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
  return (
    <header className="navbar-container" id="header">
      <Link to={"/"} className="nav-item" id="website-name">
        Shakiba Alipour
      </Link>
      <ul className="nav-menu">
        {NavbarItems.map(function (item) {
          return (
            <li className="nav-item" key={item.key}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
