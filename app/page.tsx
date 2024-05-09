import Contact from "./ui/Contact";
import Footer from "./ui/Footer";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";
import Welcome from "./ui/Welcome";
import Header from "./ui/Header";
import { Space_Grotesk } from "next/font/google";
import Divider from "./ui/Divider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Page() {
  return (
    <main className={spaceGrotesk.className}>
      <Header />
      <Welcome />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Contact />
      <Divider />
      <Footer />
    </main>
  );
}
