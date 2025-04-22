import { ConfigProvider, Tabs } from "antd";
import About from "./about/About";
import { useEffect, useState } from "react";
import ExperiencesList from "./experiences/ExperiencesList";
import Awards from "./awards/Awards";
import Projects from "./projects/Projects";

const Body = () => {
  const [tabGutter, setTabGutter] = useState(300);

  const tabs = [
    { label: "About", children: <About /> },
    { label: "Projects", children: <Projects /> },
    { label: "Experiences", children: <ExperiencesList /> },
    { label: "Awards", children: <Awards /> },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setTabGutter(10);
      } else if (window.innerWidth < 680) {
        setTabGutter(80);
      } else if (window.innerWidth < 1000) {
        setTabGutter(100);
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
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            inkBarColor: "red",
            itemActiveColor: "red",
            itemHoverColor: "light red",
            itemSelectedColor: "red",
            titleFontSize: 18,
          },
        },
      }}
    >
      <Tabs
        type="line"
        centered
        tabBarGutter={tabGutter}
        className="w-5/6 my-20 items-center self-center justify-self-center"
        items={tabs.map((item) => {
          return {
            label: item.label,
            key: item.label,
            children: item.children,
          };
        })}
      />
    </ConfigProvider>
  );
};

export default Body;
