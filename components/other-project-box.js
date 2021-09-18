
import classes from './other-project-box.module.css';

function ProjectBox(props) {

    return (
        <div className={classes.project}>
            <div className={classes.project_title}>
                <a href={props.github} target="_blank" className={classes.project_title_link}>{props.title}</a>
                <a href={props.github} target="_blank" rel="noopener noreferrer">
                    <img src="https://adeolaadeoti.netlify.app/github.a1bad59c.svg" alt="Github" />
                </a>
                <a href={props.live} target="_blank" rel="noopener noreferrer">
                    <img src="https://adeolaadeoti.netlify.app/link.66854e8a.svg" alt="Live" />
                </a>
            </div>
            <p className={classes.project_description}>{props.description}</p>
            <div className={classes.project_tech}>
                {props?.techItems?.map(item => <span className={classes.project_tech_item}>{item.name}</span>)}
            </div>
        </div>
    )
}
export default ProjectBox;