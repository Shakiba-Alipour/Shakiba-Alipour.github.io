import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../ui/TimelineItem";
import { experiences, leadershipRoles } from "../../data/experience";
import type { Experience } from "../../types";

const badgeStyles: Record<Experience["type"], string> = {
  "full-time": "bg-primary-100 text-primary-700",
  internship: "bg-level-mid-bg text-level-mid",
  "student-job": "bg-level-acad-bg text-level-acad",
  voluntary: "bg-level-pro-bg text-level-pro",
};

const badgeLabels: Record<Experience["type"], string> = {
  "full-time": "Full-time",
  internship: "Internship",
  "student-job": "Student Job",
  voluntary: "Voluntary",
};

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
          <div className="mb-2">
            <div className="flex items-center gap-4 my-10">
              <div className="flex-1 h-px bg-border" />
              <h3
                className="text-xs font-semibold tracking-widest uppercase
                             text-text-muted"
              >
                Professional Experience
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                isLast={index === experiences.length - 1}
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
                      {exp.role}
                    </h3>
                    <a  className="flex flex-row items-center cursor-pointer mt-0.5"
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-10 w-auto mr-2 object-contain"
                      />
                      <p className="text-text-secondary font-medium mt-0.5">
                        {exp.company}
                        <span className="text-text-muted font-normal">
                          {" · "}
                          {exp.location}
                        </span>
                      </p>
                    </a>
                  </div>
                  <div
                    className="flex flex-col items-start sm:items-end
                                  gap-1.5 shrink-0"
                  >
                    <span className="text-sm text-text-muted">
                      {exp.duration}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5
                                     rounded-full ${badgeStyles[exp.type]}`}
                    >
                      {badgeLabels[exp.type]}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, i) => (
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
                      {bullet}
                    </li>
                  ))}
                </ul>

                {exp.supervisorQuote && (
                  <blockquote
                    className="border-l-2 border-accent pl-4 mt-5
                                         text-text-muted text-sm italic
                                         leading-relaxed"
                  >
                    "{exp.supervisorQuote}"
                  </blockquote>
                )}

                {exp.leadershipNote && (
                  <div
                    className="mt-5 bg-surface-50 border border-border
                                  rounded-lg px-4 py-3"
                  >
                    <p className="text-text-muted text-sm leading-relaxed">
                      <span className="font-medium text-text-secondary">
                        Context:{" "}
                      </span>
                      {exp.leadershipNote}
                    </p>
                  </div>
                )}
              </TimelineItem>
            ))}
          </div>

          {/* ---- Divider between the two blocks ---- */}
          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-border" />
            <h3
              className="text-xs font-semibold tracking-widest uppercase
                             text-text-muted"
            >
              Leadership & Extracurricular
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* ---- Leadership Experience ---- */}
          {leadershipRoles.map((role, index) => (
            <TimelineItem
              key={role.id}
              isLast={index === leadershipRoles.length - 1}
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
                  <span
                    className="text-xs font-medium px-2.5 py-0.5
                                   rounded-full bg-level-pro-bg
                                   text-level-pro"
                  >
                    Voluntary
                  </span>
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
