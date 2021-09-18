import classes from './social-link.module.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function SocialLinks(props) {
    return (
        <>
            <div className={classes.box}>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    {props.image !== 'gmail' && < img src={`/images/${props.image}.svg`} alt="github" className={`${props.image === 'stackoverflow' && classes.stackoverflow}`} />}
                    {props.image === 'gmail' && <MailOutlineIcon className={classes.svg} />}
                    {props.text}</a>
            </div>
        </>
    )
}
export default SocialLinks;