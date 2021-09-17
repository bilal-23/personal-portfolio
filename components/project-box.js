import classes from './project-box.module.css';

function ProjectBox(props) {
    return (
        <div className={classes.project_box}>
            <div className={classes.project_box_link}>
                <a href="#">
                    <img src="https://adeolaadeoti.netlify.app/github.a1bad59c.svg" alt="Github" />
                </a>
                <a href="#">
                    <img src="https://adeolaadeoti.netlify.app/link.66854e8a.svg" alt="Live" />
                </a>
            </div>
            <div className={classes.project_box_content}>
                <h3>{props.name}</h3>
                <h5>API &nbsp; HTML/SCSS &nbsp; JS</h5>
            </div>

        </div>
    )
}
export default ProjectBox