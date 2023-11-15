import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    const projects = [
        {
            name: "Emojica",
            tech: "Next.js, React Query, Tailwind CSS, Mongodb",
            github: "https://github.com/bilal-23/Emojica",
            live: "https://emojica.vercel.app/"
        },
        {
            name: "Vestir",
            tech: "ReactJs, Next.js , React Router, Mongodb",
            github: "https://github.com/bilal-23/Vestir-E-Commerce",
            live: "https://vestir-clothing.vercel.app/"
        },
        {
            name: "Neuro Shop",
            tech: "Next.js, Mongodb, CSS",
            github: "https://github.com/bilal-23/neuro-shop",
            live: "https://neuro-shop.vercel.app/"
        },
        {
            name: "Netflix Clone",
            tech: "React, TMDB API, SCSS",
            github: "https://github.com/bilal-23/netflix-clone",
            live: "https://netflixclone23.netlify.app/"
        },
    ]
    return (
        <Section>
            <div className="section_title link">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects?.map(project => <ProjectBox key={project.github} name={project.name} tech={project.tech} github={project.github} live={project.live} />)}
            </div>
        </Section>
    )
}
export default Projects;