import classes from './section.module.css';

function Section(props) {
    return (
        <section className={`${classes.section} ${props.className}`} id={props.id}>
            {props.children}
        </section>
    )
}
export default Section;