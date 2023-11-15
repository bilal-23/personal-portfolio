import classes from './skills.module.css';
import Section from './section';
function Skills() {
    return (
        <Section>
            <div className="section_title link">
                SKILLS 🔧
            </div>
            <div className="section_content">
                <div className={classes.skills}>
                    <div className={classes.skills_category}>
                        <div className={`${classes.skills_category} link`}>LANGUAGES</div>
                        <ul>
                            <li className={classes.skills_category_item}>Javascript&#40;ES6&#41;</li>
                            <li className={classes.skills_category_item}>CSS/SCSS</li>
                            <li className={classes.skills_category_item}>HTML</li>
                            <li className={classes.skills_category_item}>Java</li>
                            <li className={classes.skills_category_item}>C</li>
                        </ul>
                    </div>
                    <div className={classes.skills_category}>
                        <div className={`${classes.skills_category} link`}>TOOLS</div>
                        <ul>
                            <li className={classes.skills_category_item}>Git &#38; Github</li>
                            <li className={classes.skills_category_item}>MongoDB</li>
                            <li className={classes.skills_category_item}>Firebase</li>
                            <li className={classes.skills_category_item}>Chrome DevTools
                            </li>
                        </ul>
                    </div>
                    <div className={classes.skills_category}>
                        <div className={`${classes.skills_category} link`}>FRAMEWORKS/LIBRARIES</div>
                        <ul>
                            <li className={classes.skills_category_item}>Next.js</li>
                            <li className={classes.skills_category_item}>React</li>
                            <li className={classes.skills_category_item}>TailwindCSS</li>
                            <li className={classes.skills_category_item}>React Query</li>
                            <li className={classes.skills_category_item}>Redux</li>
                            <li className={classes.skills_category_item}>React-Router</li>
                            <li className={classes.skills_category_item}>Material-UI</li>
                            <li className={classes.skills_category_item}>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Skills;