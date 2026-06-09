export default function SectionDivider({ title }: { title?: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-border" />
      {title && (
        <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted">
          {title}
        </h3>
      )}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
