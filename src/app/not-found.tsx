import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-4 pt-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">Erro 404</p>
      <h1 className="mt-2 text-3xl font-bold">Esse episódio não existe.</h1>
      <Link href="/" className="mt-6 rounded-md bg-foreground px-5 py-2.5 font-semibold text-background">
        Voltar ao início
      </Link>
    </div>
  );
}
