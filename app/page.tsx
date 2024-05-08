import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import Welcome from "./ui/Welcome";

export default function Page() {
  return (
    <main>
      <Welcome />
      <hr />
      <Skills />
      <hr />
      <Projects />
    </main>
  );
}
