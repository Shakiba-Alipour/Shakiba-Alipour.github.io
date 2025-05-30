import SingleExperience from "./components/SingleExperience";
import SeriesOfExperiences from "./components/SeriesOfExperiences";
import { experiences } from "./data/experiences";

const ExperiencesList = () => {
  const containerSyle =
    "flex flex-row max-sm:flex-col w-full border-gray-200 rounded-lg border-2 p-10 my-5 hover:shadow-xl  transition-shadow duration-300";
  return (
    <div className="w-3/4 flex flex-col justify-center justify-self-center">
      <SeriesOfExperiences
        experiences={experiences.slice(0, 2).reverse()}
        containerStyle={containerSyle}
      />

      {experiences.slice(2, 5).map((exp, index) => (
        <SingleExperience
          key={index}
          role={exp.role}
          company={exp.company}
          logo={exp.logo}
          url={exp.url}
          duration={exp.duration}
          description={exp.description}
          containerStyle={containerSyle}
        />
      ))}

      <SeriesOfExperiences
        experiences={experiences.slice(-3).reverse()}
        containerStyle={containerSyle}
      />
    </div>
  );
};

export default ExperiencesList;
