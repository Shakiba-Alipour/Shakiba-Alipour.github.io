const softSkills = ({
  itemStyle,
  titleStyle,
}: {
  itemStyle: string;
  titleStyle: string;
}) => {
  const items = [
    "Teamwork",
    "Leadership",
    "Creativity",
    "Problem-Solving",
    "Budget Management",
    "Effective Communications",
    "Patience",
  ];

  return (
    <div id="programming-skills">
      <h2 className={titleStyle}>Soft Skills</h2>
      <ul className="flex flex-row flex-wrap">
        {items.map((item) => (
          <li className={itemStyle}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default softSkills;
