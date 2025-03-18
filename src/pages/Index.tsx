
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
};

export default Index;
