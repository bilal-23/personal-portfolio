import Background from "../components/background";
import Social from "../components/social";
import Header from "../components/header";
import OtherProjects from "../components/other-project";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Background />
      <Skills />
      <Projects />
      <OtherProjects />
      <Social />
      <Footer />
    </>
  )
}
