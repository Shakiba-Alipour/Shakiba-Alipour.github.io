import { TrophyFilled } from "@ant-design/icons";
import { Badge, Card, Tag, Timeline } from "antd";
import { awards } from "./data/awards";
import { useEffect, useState } from "react";

const Awards = () => {
  const [mode, setMode] = useState("alternate");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setMode("left");
      } else {
        setMode("alternate");
      }
    };

    handleResize(); // Set initial mode
    window.addEventListener("resize", handleResize); // Update mode on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <Timeline
      mode={mode === "alternate" ? "alternate" : "left"}
      className="w-full max-md:w-3/4 self-center items-center justify-self-center"
    >
      {awards.map((item, index) => (
        <Timeline.Item
          key={index}
          dot={<TrophyFilled />}
          color={item.rank === 1 ? "gold" : "silver"}
        >
          <Badge.Ribbon
            text={item.rank === 1 ? "1st Rank" : "2nd Rank"}
            color={item.rank === 1 ? "gold" : "silver"}
          >
            <Card
              title={
                <div className="whitespace-normal break-words text-left">
                  {item.award}
                </div>
              }
              className="w-full"
            >
              <Tag color="blue">{item.year}</Tag>
              <p>{item.competition}</p>
              <p>{item.place}</p>
            </Card>
          </Badge.Ribbon>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default Awards;
