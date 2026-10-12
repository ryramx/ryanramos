import type { MetadataRoute } from "next";
import { profile, projects } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: base },
    { url: `${base}/trajetoria` },
    { url: `${base}/contato` },
    ...projects.map((p) => ({ url: `${base}/projetos/${p.slug}` })),
  ];
}
