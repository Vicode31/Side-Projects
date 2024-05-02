import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </main>
  );
}

export const projects = [
  {
    title: "SEO",
    description:
      "Optimiser votre référencement naturel en utilisant les outils de Google.",
  },
  {
    title: "UX",
    description: "Savoir favoriser l'expérience utilisateur.",
  },
  {
    title: "Performance",
    description:
      "Un chargement rapide améliorant à la fois l'expérience utilisateur et le référencement naturel.",
  },
  {
    title: "Design",
    description:
      "Transmettre de manière instantanée et efficace vos valeurs  à vos clients.",
  },
  {
    title: "Responsive",
    description:
      "Permettre d'avoir un design adapté à tous les supports et tailles d'écran.",
  },
  {
    title: "Analyse statistiques",
    description:
      "Sans statistiques, vous ne saurez pas quelles stratégies fonctionnent le mieux.",
  },
];
