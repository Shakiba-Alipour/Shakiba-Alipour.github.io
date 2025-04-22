import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-scroll";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  NavbarItems: { key: string; label: string; to: string }[];
}

const MobileNavbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  NavbarItems,
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  return (
    <div className="py-3 px-10 flex flex-row justify-between">
      <Link to={"/"}>Shakiba Alipour</Link>
      <Button
        type="primary"
        className="bg-dark-gray h-fit hover:!border-white hover:!bg-gray-800"
        icon={<MenuOutlined />}
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="absolute top-16 right-3 p-4 w-fit bg-dark-gray rounded-md flex justify-center items-center z-50">
          <div className="flex flex-col m-0 justify-center">
            {NavbarItems.map((item) => (
              <div
                key={item.key}
                className="text-center"
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
};

export default MobileNavbar;
