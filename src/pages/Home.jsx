import Hero from "../components/Hero";
import LabGrid from "../components/LabGrid";
import ArchitectureGuide
  from "../components/ArchitectureGuide/ArchitectureGuide";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <LabGrid />
      <ArchitectureGuide />
      <About/>
      <Contact/>
    </>
  );
}