
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { MatrixBackground } from "@/components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
