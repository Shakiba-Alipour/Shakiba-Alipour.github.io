import type { VoluntaryRole } from "../../../data/experience";
import Badge from "../../ui/Badge";
import TimelineItem from "../../ui/TimelineItem";

export default function ExperienceCard({
  role,
  voluntaryRoles,
  index,
}: {
  role: VoluntaryRole;
  voluntaryRoles: VoluntaryRole[];
  index: number;
}) {
  return (
    <TimelineItem key={role.id} isLast={index === voluntaryRoles.length - 1}>
      <div
        className="flex flex-col sm:flex-row sm:items-start
                              sm:justify-between gap-2"
      >
        <div>
          <h3
            className="font-display font-bold text-xl
                                 text-text-primary"
          >
            {role.role}
          </h3>
        </div>
        <div
          className="flex flex-col items-start sm:items-end
                                gap-1.5 shrink-0"
        >
          <span className="text-sm text-text-muted">{role.duration}</span>
          {/* Voluntary badge — consistent with other badges */}
          <Badge label="voluntary" />
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
  );
}
