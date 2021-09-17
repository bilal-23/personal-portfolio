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
                <ProjectBox name="Neuro Shop" tech="Next.js, Mongodb, CSS" github="https://github.com/bilal-23/neuro-shop" live="https://neuro-shop.vercel.app/" />
                <ProjectBox name="Netflix Clone" tech="React, TMDB API, SCSS" github="https://github.com/bilal-23/netflix-clone" live="https://netflixclone23.netlify.app/" />
                <ProjectBox name="Twitter Clone" tech="React, Firebase, SCSS" github="https://github.com/bilal-23/twitter-clone" live="https://twitterclone23.netlify.app/" />
                <ProjectBox name="Tesla Clone" tech="React, Firebase, CSS " github="https://github.com/bilal-23/tesla-clone" live="https://tesla-clone-23.netlify.app/" />
                <ProjectBox name="Weather App" tech="Javascript, SCSS, HTML" github="https://github.com/bilal-23/Weather-App" live="https://vetero.netlify.app/" />
                <ProjectBox name="Forkify" tech="Javascript, CSS, HTML" github="https://github.com/bilal-23/forkify" live="https://forkify-23.netlify.app/" />
            </div>
        </Section>
    )
}
export default Projects;