import { ContactSection } from "@/components/contact-section";
import { Intro } from "@/components/intro";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Timeline } from "@/components/timeline";
import { featuredProjectSlugs, getProject, projectsSeasonCode, seasons } from "@/content/site";

export default function Home() {
  const featured = featuredProjectSlugs.map((slug) => getProject(slug)!);
  const live = featured.filter((p) => p.status === "no-ar").length;

  return (
    <>
      <Intro live={live} building={featured.length - live} />
      <Timeline seasons={seasons} projects={featured} projectsSeasonCode={projectsSeasonCode} />
      <Services />
      <Stack />
      <ContactSection />
    </>
  );
}
