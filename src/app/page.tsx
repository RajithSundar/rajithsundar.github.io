import { HeroAntigravity } from "@/components/HeroAntigravity";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroAntigravity />
      <Projects />
      <Skills />
      <Experience />
      {/* About is kept as narrative, maybe rename or simplify. It's listed in requirements so we keep it. */}
      <About />
      <Contact />
    </main>
  );
}
