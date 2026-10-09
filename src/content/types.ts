export type Status = "no-ar" | "em-desenvolvimento" | "planejado";

export interface Episode {
  title: string;
  line: string;
  image: string;
  /** Mostra na fileira da página inicial (os demais ficam só na página de detalhes). */
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  status: Status;
  badge: string;
  tagline: string;
  meta: string[];
  cover: string;
  /** Imagens que alternam no destaque do topo, como um trailer. */
  heroImages?: string[];
  imageNote?: string;
  story?: { title: string; body: string }[];
  outcomes?: { title: string; body: string }[];
  numbers?: { value: string; label: string }[];
  techDetails?: string;
  nextChapters?: string[];
  episodes?: Episode[];
  links?: { label: string; href: string }[];
}

export interface Season {
  code: string;
  title: string;
  period?: string;
  body: string;
}

export interface Certificate {
  title: string;
  issuer?: string;
  detail?: string;
}

export interface Service {
  title: string;
  audience: string;
  body: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ContactLink {
  kind: "whatsapp" | "email" | "linkedin" | "github";
  label: string;
  value: string;
  href: string;
}
