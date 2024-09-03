import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import poke from '../../assets/pkb.png';
import py from '../../assets/py.jpg';
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
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="Pokedex"
          p="JS game"
        />
        <ProjectCard
          src={py}
          link="https://github.com/hada97/data_visualization_Imigracao_01"
          h3="Data Analysis"
          p="Python notebook"
        />
        <ProjectCard
          src={""}
          link=""
          h3=""
          p=""
        />
      </div>
    </section>
  );
}

export default Projects;
