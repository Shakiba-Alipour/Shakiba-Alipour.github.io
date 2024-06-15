import { Link } from "react-scroll";
import React, { useState } from "react";
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
  const isMobile = false;

  if (window.innerWidth <= 480) {
    isMobile = true;
  }

  return (
    <nav className="navbar">
      {isMobile ? <MobileNavbarManagement /> : <DesktopNavbarManagement />}
    </nav>
  );
}

function MobileNavbarManagement() {
  const { isMenuOpen, setIsMenuOpen } = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  <Button type="primary" icon={<MenuOutlined />} />;

  return (
    <div className="navbar-container">
      <Link to={"/"} className="nav-item" id="website-name">
        Shakiba Alipour
      </Link>

      <div id="navbar-menu">
        <MenuOutlined />
      </div>
    </div>
  );
}

function ShowMenuItems(toggleMenu) {
  return (
    <div>
      <div data-role="BurgerMenu" class="home-burger-menu" onClick={toggleMenu}>
        <MenuOutlined />
      </div>
      <div data-role="MobileMenu" class="home-mobile-menu">
        <div class="home-links-container1">
          <span class="home-link03 Navbar-Link">About</span>
          <span class="home-link04 Navbar-Link">Experience</span>
          <span class="Navbar-Link home-link05">Awards</span>
          <span class="Navbar-Link home-link05">Contact</span>
        </div>
      </div>
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
        {/* <li className="nav-item">
          <Link to={"about"} className="nav-links" smooth={true}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"experiences"} className="nav-links" smooth={true}>
            Experiences
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"awards"} className="nav-links" smooth={true}>
            Awards
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"footer"} className="nav-links" smooth={true}>
            Contact
          </Link>
        </li> */}
      </ul>
      {/* <Menu mode="horizontal" items={NavbarItems} />; */}
    </header>
  );
}
