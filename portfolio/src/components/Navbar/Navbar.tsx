import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); //for small screens
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 780);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-dark-gray text-white text-lg fixed z-50 h-16 flex items-center">
      {isMobile ? (
        <MobileNavbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          NavbarItems={NavbarItems}
        />
      ) : (
        <DesktopNavbar NavbarItems={NavbarItems} />
      )}
    </nav>
  );
};

export default Navbar;
