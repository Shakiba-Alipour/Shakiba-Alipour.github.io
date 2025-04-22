import { Tabs } from "antd";
import About from "./About/About";
import { useEffect, useState } from "react";

const Body = () => {
  const [tabGutter, setTabGutter] = useState(300);

  const tabs = [
    { label: "About", children: <About /> },
    { label: "Projects", children: "Content of Tab Pane" },
    { label: "Experiences", children: "Content of Tab Pane" },
    { label: "Awards", children: "Content of Tab Pane" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setTabGutter(10);
      } else if (window.innerWidth < 680) {
        setTabGutter(100);
      } else if (window.innerWidth < 1000) {
        setTabGutter(150);
      } else if (window.innerWidth < 1400) {
        setTabGutter(200);
      } else {
        setTabGutter(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Tabs
      type="line"
      centered
      tabBarStyle={{ fontSize: 2, fontWeight: "bold" }}
      tabBarGutter={tabGutter}
      className="w-5/6 my-20 items-center self-center justify-self-center"
      items={tabs.map((item) => {
        return { label: item.label, key: item.label, children: item.children };
      })}
    />
  );
};

export default Body;
