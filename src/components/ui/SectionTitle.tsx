/* ============================================================
Reusable section heading used by every section.
Accepts a title, optional subtitle, and optional alignment.
============================================================ */

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>

      {/* Accent line above the title */}
      <div
        className={`h-1 w-12 bg-accent rounded-full mb-4
          ${align === "center" ? "mx-auto" : ""}`}
      />

      <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-text-muted text-lg max-w-2xl
          ${align === 'center' ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  );
}