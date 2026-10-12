import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contato",
  description: "Vagas, orçamentos, contratação ou só uma troca de ideias.",
};

export default function ContatoPage() {
  return (
    <div className="pt-16">
      <ContactSection asPage />
    </div>
  );
}
