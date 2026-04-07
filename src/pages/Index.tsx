import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectDetail from "@/components/ProjectDetail";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Project } from "@/data/projects";

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onSelect={setSelectedProject} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
