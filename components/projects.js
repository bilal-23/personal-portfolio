import ProjectBox from './project-box';
import classes from './projetcs.module.css';
import Section from './section';
function Projects() {
    return (
        <Section>
            <div className="section_title">
                Featured Projects 📁
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                <ProjectBox name="Neuro Shop" tech="Next.js, Mongodb, CSS" github="https://github.com/bilal-23/neuro-shop" live="https://neuro-shop.vercel.app/" />
                <ProjectBox name="Netflix Clone" tech="React, TMDB API, SCSS" github="https://github.com/bilal-23/netflix-clone" live="https://netflixclone23.netlify.app/" />
                <ProjectBox name="Twitter Clone" tech="React, Firebase, SCSS" github="https://github.com/bilal-23/twitter-clone" live="https://twitterclone23.netlify.app/" />
            </div>
        </Section>
    )
}
export default Projects;