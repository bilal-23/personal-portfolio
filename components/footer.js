import classes from './footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.developed}>
                Developed By <a href="https://github.com/bilal-23/personal-portfolio" target="_blank" rel="noopener noreferrer" className={classes.link}>Bilal Mansuri</a>
            </div>
            <div className={classes.design}>
                Design by <a href="https://github.com/bchiang7/v3" target="_blank" rel="noopener noreferrer" className={classes.link}>Brittany</a> &amp; <a href="https://github.com/adeolaadeoti/adeolaadeoti-portfolio" target="_blank" rel="noopener noreferrer" className={classes.link}>Adeolaadeoti</a>
            </div>
        </footer>
    )
}
export default Footer;