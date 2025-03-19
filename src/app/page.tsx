import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Techs } from "@/components/techs";

export default function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Hero />
      <Techs />
      <Projects />
    </div>
  );
}
