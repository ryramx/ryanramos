import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10 text-center text-sm text-muted sm:px-10">
      {footer.line}
    </footer>
  );
}
