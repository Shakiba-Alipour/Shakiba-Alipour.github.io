/* ============================================================
Reusable section heading used by every section.
Accepts a tag, optional title, and optional alignment.
============================================================ */

interface SectiontagProps {
  tag: string;
  title?: string;
  align?: "left" | "center";
}

export default function Sectiontag({
  tag,
  title,
  align = "left",
}: SectiontagProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p
        className="font-display font-semibold text-accent before:content-['']
                         before:inline-block before:w-8 before:h-0.5 before:bg-accent before:mr-2 "
      >
        {tag}
      </p>

      {title && (
        <h2
          className="mt-3 text-text-muted text-3xl max-w-2xl
          ${align === 'center' ? 'mx-auto' : ''}"
        >
          {title}
        </h2>
      )}
    </div>
  );
}
