import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    return (
        <Section>
            <div className="section_title">
                Other Projects
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                <ProjectBox title="Tesla Clone" description="Tesla website clone made using React and Authentication with firebase."
                    techItems={[
                        { name: "Javascript" },
                        { name: "Firebase" },
                        { name: "React Redux" },
                        { name: "Styled Components" },
                    ]}
                    github="https://github.com/bilal-23/tesla-clone"
                    live="https://tesla-clone-23.netlify.app/" />

                <ProjectBox title="Weather App" description="Simple javascript app to query about weather of different cities."
                    techItems={[
                        { name: 'Javascript' },
                        { name: "TMDB API" },
                        { name: "CSS" },
                        { name: "HTML" }
                    ]}
                    github="https://github.com/bilal-23/Weather-App" live="https://vetero.netlify.app/" />

                <ProjectBox title="Forkify" description="Simple javascript app to search for different recipes using an API."
                    techItems={[
                        { name: 'Javascript' },
                        { name: "API" },
                        { name: "CSS" },
                        { name: "HTML" }
                    ]}
                    github="https://github.com/bilal-23/forkify" live="https://forkify-23.netlify.app/" />

                <ProjectBox title="Tic Tac Toe" description="Tic Tac Toe game made using React."
                    techItems={[
                        { name: 'React' },
                        { name: "CSS" },
                        { name: "HTML" },
                        { name: 'Javascript' },
                    ]}
                    github="https://github.com/bilal-23/Tic-Tac-Toe" live="https://tictactoe23.netlify.app/" />

                <ProjectBox title="ToDo App" description="ToDo App made using React and Context API."
                    techItems={[
                        { name: "React" },
                        { name: "Context API" },
                        { name: "CSS" },
                        { name: 'Javascript' },
                    ]}
                    github="https://github.com/bilal-23/toDoApp" live="https://todolist-23.netlify.app/" />
                <div className={classes.more}>
                    <a href="https://github.com/bilal-23?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section>
    )
}
export default OtherProjects;