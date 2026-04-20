import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Building } from "@/components/portfolio/Building";
import { Manifesto } from "@/components/portfolio/Manifesto";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Process />
      <Experience />
      <Projects />
      <Building />
      <Manifesto />
      <Contact />
    </main>
  );
};

export default Index;
