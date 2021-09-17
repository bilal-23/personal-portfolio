import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    return (
        <Section>
            <div className="section_title">
                Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                <ProjectBox name="Neuro Shop" />
                <ProjectBox name="Netflix Clone" />
                <ProjectBox name="Twitter Clone" />
                <ProjectBox name="Tesla Clone" />
                <ProjectBox name="Weather App" />
                <ProjectBox name="Forkify" />
            </div>
        </Section>
    )
}
export default Projects;