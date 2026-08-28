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
