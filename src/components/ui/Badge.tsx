// import type { Experience, ExperienceType } from "../../types";

// const badgeStyles: Record<Experience["type"], string> = {
//   "full-time": "bg-primary-100 text-primary-700",
//   internship: "bg-level-mid-bg text-level-mid",
//   "student-job": "bg-level-acad-bg text-level-acad",
//   voluntary: "bg-level-pro-bg text-level-pro",
// };

// const badgeLabels: Record<Experience["type"], string> = {
//   "full-time": "Full-time",
//   internship: "Internship",
//   "student-job": "Student Job",
//   voluntary: "Voluntary",
// };

// type Props = {
//   type: ExperienceType;
// };

// export default function Badge({ type }: Props) {
//   return (
//     <span
//       className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[type]}`}
//     >
//       {badgeLabels[type]}
//     </span>
//   );
// }

// ============================================================
// components/ui/Badge.tsx
//
// Reusable badge/pill component.
// Used by: Experience (type labels), Projects (tech stack),
//          Skills (level labels)
//
// Variants map to semantic color groups defined in index.css
// ============================================================

interface BadgeProps {
  label: string;
}

export default function Badge({ label}: BadgeProps) {
  return (
    <span
      className="inline-flex items-center text-xs font-medium
                  px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700"
    >
      {label}
    </span>
  );
}
