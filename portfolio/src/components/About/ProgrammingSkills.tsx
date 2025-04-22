const ProgrammingSkills = ({
  itemStyle,
  titleStyle,
}: {
  itemStyle: string;
  titleStyle: string;
}) => {
  const items = [
    "Java",
    "React",
    "Python",
    "C",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Redux",
    "Git",
  ];

  return (
    <div id="programming-skills" className="skills">
      <h2 className={titleStyle}>Programming Skills</h2>
      <ul className="flex flex-row flex-wrap">
        {items.map((item) => (
          <li className={itemStyle}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingSkills;
