import Button from './UI/button';
import ProjectBox from './other-project-box';
import Section from './section';
import classes from './other-project.module.css';

function OtherProjects() {
    const projects = [
        {
            name: "Tesla Clone",
            description: "Tesla website clone made using React and Authentication with firebase.",
            techItems: ["Javasscript", "Firebase", `React Redux`, `Styled Components`],
            github: "https://github.com/bilal-23/tesla-clone",
            live: "https://tesla-clone-23.netlify.app/",
        },
        {
            name: "Weather App",
            description: "Simple javascript app to query about weather of different cities.",
            techItems: ['Javascript', "CSS", "HTML"],
            github: "https://github.com/bilal-23/Weather-App",
            live: "https://vetero.netlify.app/"
        },
        {
            name: "Forkify",
            description: "Simple javascript app to search for different recipes using an API.",
            techItems: ['Javascript', "API", "CSS", "HTML"],
            github: "https://github.com/bilal-23/forkify",
            live: "https://forkify-23.netlify.app/"
        },
        {
            name: "Tic Tac Toe",
            description: "Tic Tac Toe game made using React.",
            techItems: ['React', "CSS", "HTML", 'Javascript'],
            github: "https://github.com/bilal-23/Tic-Tac-Toe",
            live: "https://tictactoe23.netlify.app/"
        },
        {
            name: "ToDo App",
            description: "ToDo App made using React and Context API.",
            techItems: ["React", "Context API", "CSS", 'Javascript'],
            github: "https://github.com/bilal-23/toDoApp",
            live: "https://todolist-23.netlify.app/"
        }
    ]
    return (
        <Section>
            <div className="section_title link">
                Other Projects
            </div>
            <div className={`${classes.projects_wrapper} section_content`}>
                {projects.map(project => <ProjectBox key={project.github} title={project.name} description={project.description} techItems={project.techItems} github={project.github} live={project.live} />)}
                < div className={classes.more} >
                    <a href="https://github.com/bilal-23?tab=repositories" target="_blank" rel="noopener noreferrer"><Button> More Projects</Button></a>
                </div>
            </div>
        </Section >
    )
}
export default OtherProjects;