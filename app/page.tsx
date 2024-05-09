import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import Welcome from "./ui/Welcome";
import Header from "./ui/Header";
import Divider from "./ui/Divider";

export default function Page() {
  return (
    <main>
      <Header />
      <Welcome />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </main>
  );
}
