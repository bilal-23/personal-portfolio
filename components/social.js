import classes from './social.module.css';
import Section from './section';
import SocialLinks from './social-link';


function Social() {
    return (
        <Section>
            <div className="section_title">
                On the Web 🌐
            </div>
            <div className={`${classes.link_wrapper} section_content`}>
                <SocialLinks image="github" text="github" link="https://github.com/bilal-23" />
                <SocialLinks image="linkedin" text="linkedIn" link="https://www.linkedin.com/in/bilalmansuri" />
                <SocialLinks image="stackoverflow" text="Stackoverflow" link="https://stackoverflow.com/users/15672769/bilal-mohammad" />
                <SocialLinks image="codepen" text="Codepen" link="https://codepen.io/bilal-23" />
                <SocialLinks image="twitter" text="Twitter" link="https://twitter.com/bilalmansuri2e" />
                <SocialLinks image="gmail" text="mail" link="mailto:mansuribilal101@gmail.com" />
            </div>
        </Section>
    )
}
export default Social;