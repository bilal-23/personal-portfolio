import classes from './button.module.css';
function Button(props) {
    return (
        <button className={classes.button} onClick={props.onClick}>{props.children}</button>
    )
}
export default Button;