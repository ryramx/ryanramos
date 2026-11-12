import type { Status } from "@/content/types";
import { statusLabel } from "@/content/site";

const styles: Record<Status, string> = {
  "no-ar": "bg-live-bg text-live-fg",
  "em-desenvolvimento": "bg-dev-bg text-dev-fg",
  planejado: "bg-surface-2 text-muted",
};

/** Selo único de status: verde para o que está no ar, âmbar para o que está em construção. */
export function StatusPill({ status, className = "" }: { status: Status; className?: string }) {
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${styles[status]} ${className}`}
    >
      {statusLabel[status]}
    </span>
  );
}
