import type { Experience, ExperienceType } from "../../types";

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

type Props = {
  type: ExperienceType;
};

export default function Badge({ type }: Props) {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[type]}`}
    >
      {badgeLabels[type]}
    </span>
  );
}
