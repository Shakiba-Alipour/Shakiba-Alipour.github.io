import type { Experience } from "../../../types";
import Badge from "../../ui/Badge";
import TimelineItem from "../../ui/TimelineItem";

export default function ExperienceCard({
  exp,
  experiences,
  index,
}: {
  exp: Experience;
  experiences: Experience[];
  index: number;
}) {
  return (
    <TimelineItem key={exp.id} isLast={index === experiences.length - 1}>
      <div
        className="flex flex-col sm:flex-row sm:items-start
                                    sm:justify-between gap-2 mb-4"
      >
        <div>
          <h3
            className="mb-2 font-display font-bold text-xl
                                       text-text-primary"
          >
            {exp.role}
          </h3>
          <a
            className="flex flex-row items-center cursor-pointer mt-0.5"
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
          <span className="text-sm text-text-muted">{exp.duration}</span>
          <Badge type={exp.type} />
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
            <span className="font-medium text-text-secondary">Context: </span>
            {exp.leadershipNote}
          </p>
        </div>
      )}
    </TimelineItem>
  );
}
