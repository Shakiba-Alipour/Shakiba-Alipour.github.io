/* ============================================================
A single item in a vertical timeline.
Used by the Experience section.
============================================================ */

interface TimelineItemProps {
  isLast?: boolean;       // hides the connecting line on the last item
  children: React.ReactNode;
}

export default function TimelineItem({
  isLast = false,
  children,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6 mt-8">

      {/* ---- Timeline spine: dot + vertical line ---- */}
      <div className="flex flex-col items-center">

        {/* The dot */}
        <div className="w-3 h-3 rounded-full bg-accent mt-1.5
                        ring-4 ring-primary-100 shrink-0" />

        {/* The vertical line — hidden on last item */}
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2" />
        )}
      </div>

      {/* Content sits to the right of the spine */}
      <div className="pb-12 flex-1">{children}</div>
    </div>
  );
}