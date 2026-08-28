import SectionTitle from "../../ui/SectionTitle";
import { experiences, voluntaryRoles } from "../../../data/experience";
import type { Experience } from "../../../types";
import SectionDivider from "../../ui/SectionDivider";
import ExperienceCard from "./ExperienceCard";
import VoluntaryCard from "./VoluntaryCard";
import CompanyIdentity from "../../ui/CompanyIdentity";

export default function Experience() {
  return (
      <div className="max-w-6xl mx-auto px-6 bg-surface py-24">
        <SectionTitle
          tag="Experience"
          title="Where I've worked and what I've built"
        />

        <div className="max-w-3xl">
          {/* ---- Professional Experience ---- */}
          <div>
            <SectionDivider title="Professional Experience" />
            {experiences.map((exp, index) => (
              <ExperienceCard
                exp={exp}
                experiences={experiences}
                index={index}
              />
            ))}
          </div>

          {/* ---- Divider between the two blocks ---- */}
          <SectionDivider title="Leadership & Extracurricular" />

          {/* ---- Voluntary Experience ---- */}
          <CompanyIdentity
            logo={voluntaryRoles[0].logo}
            name={voluntaryRoles[0].organization}
            location={voluntaryRoles[0].location}
            url={voluntaryRoles[0].url}
          />

          {voluntaryRoles.map((role, index) => (
            <VoluntaryCard
              role={role}
              voluntaryRoles={voluntaryRoles}
              index={index}
            />
          ))}
        </div>
      </div>
  );
}
