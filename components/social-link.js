import classes from './social-link.module.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Head from 'next/head';

function SocialLinks(props) {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/d3c372b43e.js" crossorigin="anonymous"></script>
            </Head>
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