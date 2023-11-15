import classes from './background.module.css';
import Section from './section';
function Background() {
    return (
        <Section className={classes.background}>
            <div className={`${classes.background_title} link`}>
                BACKGROUND 👨‍💻
            </div>
            <div className={classes.background_content}>
                <p>
                    Welcome to my portfolio! I hold a degree in Electronics and Communication Engineering from <a href="https://www.medicaps.ac.in/" className={classes.background_link} target="_blank" rel="noreferrer">Medi-Caps University</a>, Indore, and currently serve as a full-time Frontend Engineer at <a href="https://www.zuapp.co/" className={classes.background_link} target="_blank" rel="noreferrer">ZuAI</a>, where I initially interned for a year.
                </p>
                <p>
                    As a passionate frontend developer, I thrive on exploring new frameworks and libraries. My recent focus has been on mastering Next.js, and Typescript . My goal in web development is to craft visually stunning, responsive products that deliver a pixel-perfect user experience.
                </p>
                <p>
                    Beyond coding, I find joy in immersing myself in books and engaging in online gaming. I also contribute as a web development mentor at the <a href="https://gdsc.community.dev/medi-caps-university-indore/" className={classes.background_link} target="_blank" rel="noreferrer">Google Developer Student Club</a> on my university campus. Join me on this journey as I continue to push the boundaries of web development and create innovative digital experiences.
                </p>
            </div>
        </Section>
    )

}
export default Background;