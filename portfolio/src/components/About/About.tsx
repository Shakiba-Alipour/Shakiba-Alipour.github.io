import Description from "./Description";
import ProgrammingSkills from "./ProgrammingSkills";
import SoftSkills from "./SoftSkills";

const About = () => {
  const itemStyle =
    "py-2 px-4 min-h-8 m-2 bg-gray-300 w-fit rounded-lg bg-opacity-100";
  const titleStyle = "text-xl font-bold";
  return (
    <div
      id="about-section"
      className="flex flex-row max-md:flex-col w-3/4 place-self-center items-center gap-x-20"
    >
      <Description />
      <div className="flex flex-col gap-y-10 my-5">
        <ProgrammingSkills itemStyle={itemStyle} titleStyle={titleStyle} />
        <SoftSkills itemStyle={itemStyle} titleStyle={titleStyle} />
      </div>
    </div>
  );
};

export default About;
