import React from "react";
import { Tag, Card, Badge, Timeline } from "antd";
import { TrophyFilled } from "@ant-design/icons";
import "./Awards.css";

const awards = [
  {
    year: "2024",
    competition: "The 22nd University Titr Festival",
    award: "The Best Artistic Magazine for Music Club’s Arghanoun Magazine",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
  {
    year: "2024",
    competition: "The 22nd University Titr Festival",
    award:
      "The Best Paper-Electronic Magazine for Music Club’s Arghanoun Magazine",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
  {
    year: "2024",
    competition: "The 11th National Rouyesh Festival",
    award:
      "The Second-Best Artistic Club of the Year for Ferdowsi University of Mashhad Music Club",
    place: "IRAN",
    rank: 2,
  },
  {
    year: "2023",
    competition: "The 21st University Titr Festival",
    award: "The Best Artistic Magazine for Music Club’s Arghanoun Magazine",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
  {
    year: "2023",
    competition: "The 14th University Rouyesh Festival",
    award: "The Second-Best Artistic Club for Music Club",
    place: "Ferdowsi University of Mashhad",
    rank: 2,
  },
  {
    year: "2022",
    competition: "The 13th University Rouyesh Festival",
    award: "The Best Club President of the Year",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
  {
    year: "2022",
    competition: "The 10th National Rouyesh Festival",
    award:
      "The Best Artistic Club of the Year for Ferdowsi University of Mashhad Music Club",
    place: "IRAN",
    rank: 1,
  },
  {
    year: "2022",
    competition: "The 13th University Rouyesh Festival",
    award: "The Best Artistic Club for Music Club",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
  ,
  {
    year: "2021",
    competition: "The 9th National Rouyesh Festival",
    award:
      "The Best Artistic Club of the Year for Ferdowsi University of Mashhad Music Club",
    place: "IRAN",
    rank: 1,
  },
  {
    year: "2021",
    competition: "The 12th University Rouyesh Festival",
    award: "The Best Artistic Club for Music Club",
    place: "Ferdowsi University of Mashhad",
    rank: 1,
  },
];

export function Awards() {
  return (
    <div className="awards_section">
      <h1 className="section_title">Awards</h1>

      <Timeline mode="alternate" className="timeline">
        {awards.map((item, index) => (
          <Timeline.Item
            key={index}
            dot={<TrophyFilled />}
            color={item.rank === 1 ? "gold" : "silver"}
          >
            <Badge.Ribbon
              text={item.rank === 1 ? "1st Rank" : "2nd Rank"}
              color={item.rank === 1 ? "gold" : "silver"}
              className="badges"
            >
              <Card title={item.award} className="award_card">
                <Tag color="blue" className="tag" id="year">
                  {item.year}
                </Tag>
                <p id="competition" className="description">
                  {item.competition}
                </p>
                <p id="place" className="description">
                  {item.place}
                </p>
              </Card>
            </Badge.Ribbon>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
