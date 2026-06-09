import SectionTitle from "../../ui/SectionTitle";
import TimelineItem from "../../ui/TimelineItem";
import { experiences, voluntaryRoles } from "../../../data/experience";
import type { Experience } from "../../../types";
import SectionDivider from "../../ui/SectionDivider";
import Badge from "../../ui/Badge";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          tag="Experience"
          title="Where I've worked and what I've built"
        />

        <div className="max-w-3xl">
          {/* ---- Professional Experience ---- */}
          <div>
            <SectionDivider title="Professional Experience" />
            {experiences.map((exp, index) => (
              <ExperienceCard exp={exp} experiences={experiences} index={index} />
            ))}
          </div>

          {/* ---- Divider between the two blocks ---- */}
          <SectionDivider title="Leadership & Extracurricular" />

          {/* ---- Voluntary Experience ---- */}
          {voluntaryRoles.map((role, index) => (
            <TimelineItem
              key={role.id}
              isLast={index === voluntaryRoles.length - 1}
            >
              <div
                className="flex flex-col sm:flex-row sm:items-start
                              sm:justify-between gap-2 mb-4"
              >
                <div>
                  <h3
                    className="font-display font-bold text-xl
                                 text-text-primary"
                  >
                    {role.role}
                  </h3>
                  <p className="text-text-secondary font-medium mt-0.5">
                    {role.organization}
                  </p>
                </div>
                <div
                  className="flex flex-col items-start sm:items-end
                                gap-1.5 shrink-0"
                >
                  <span className="text-sm text-text-muted">
                    {role.duration}
                  </span>
                  {/* Voluntary badge — consistent with other badges */}
                  <Badge type="voluntary" />
                </div>
              </div>

              <ul className="space-y-2">
                {role.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-text-secondary
                                         text-sm leading-relaxed"
                  >
                    <span
                      className="text-accent mt-1.5 shrink-0
                                     text-xs"
                    >
                      ●
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
