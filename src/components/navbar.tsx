"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, profile } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-background/95 backdrop-blur" : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-10">
        <Link href="/" className="text-base font-bold tracking-tight text-accent sm:text-lg">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contato"
            className="rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110 sm:px-4 sm:py-2 sm:text-sm"
          >
            Vamos conversar
          </Link>
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 md:hidden"
          >
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 text-foreground/90" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
