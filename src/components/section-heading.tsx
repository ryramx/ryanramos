export function SectionHeading({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div className="mb-4 px-4 sm:px-10">
      <h2 id={id} className="scroll-mt-24 text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
    </div>
  );
}
