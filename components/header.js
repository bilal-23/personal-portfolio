import classes from './header.module.css';
function Header() {
    return (
        <header className={classes.header}>
            <h1>Hello! <span className={classes.emoji_wave}>👋</span></h1>
            <h2 className={classes.header_info}>I&rsquo;m Md Bilal Mansuri, a front-end developer focused on building beautiful web-apps.</h2>
            <h3 className={classes.header_contact}> <span>Get in touch </span> <span className={classes.emoji_pointer}>👉</span><span> <a href="mailto:mansuribilal101@gmail.com" rel="noreferrer" target="_blank" className={classes.header_contact_link}>mansuribilal101@gmail.com</a> </span> </h3>
        </header>
    )
}
export default Header;