import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/hada97/spring-boot-api-rest"
          h3="API Rest vollmed"
          p="Java Api Rest"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/hada97/pokedex"
          h3="Pokedex"
          p="JS game"
        />
        <ProjectCard
          src={hipsster}
          link=""
          h3=""
          p=""
        />
        <ProjectCard
          src={fitLift}
          link=""
          h3=""
          p=""
        />
      </div>
    </section>
  );
}

export default Projects;
