import styles from './HeroStyles.module.css';
import heroImg from '../../assets/an3.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/ww.svg';
import twitterDark from '../../assets/wd.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of adailson"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Adailson
          <br />
          Guimaraes
        </h1>
        <h2>Back End Developer</h2>
        <span>
          <a href="https://github.com/hada97" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/adailson-g-4938a9270/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>

        <p className={styles.description}>
          Graduando em Análise e Desenvolvimento de Sistemas, AWS Certified, experiência com Java, banco de dados, Python, Node, Azure e Docker
        </p>

        <a href={CV} download className={styles.description}>
          <button className="hover">Resume</button>
        </a>

      </div>
    </section>
  );
}

export default Hero;