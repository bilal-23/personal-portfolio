import Background from "../components/background";
import Header from "../components/header";
import OtherProjects from "../components/other-project";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <Background />
      <Skills />
      <Projects />
      <OtherProjects />
    </>
  )
}
