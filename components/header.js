import classes from './header.module.css';
import Button from './UI/button';
function Header() {
    return (
        <>
            <h5 className={classes.header_logo}>bilal</h5>
            <div className={classes.header_background}></div>
            <header className={classes.header}>
                <h1>HI THERE👋, I&rsquo;m!</h1>
                <h2 className={classes.header_info}>Md Bilal Mansuri.</h2>
                <h3 className={classes.header_tag}>front-end developer.</h3>
                <h4 className={classes.header_details}>Front-end developer focused on building webapps with pixel perfect User Experince.</h4>
                <div className={classes.cta}>
                    <Button>Downlod Resume</Button>
                </div>
                <h3 className={classes.header_contact}> <span>Get in touch </span> <span className={classes.emoji_pointer}>👉</span><span> <a href="mailto:mansuribilal101@gmail.com" target="_blank" rel="noreferrer" className={classes.header_contact_link}>mansuribilal101@gmail.com</a> </span> </h3>
            </header>
        </>
    )
}
export default Header;