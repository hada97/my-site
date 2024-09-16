import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/java.png';
import poke from '../../assets/pkb.png';
import py from '../../assets/python.png';
import node from '../../assets/node-js.png';
import apijava from '../../assets/cu.png';
import ProjectCard from '../../common/ProjectCard';
import kotlin from '../../assets/kt.png';
import jv from '../../assets/jv.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="http://54.159.124.62:8080/swagger-ui/index.html"
          h3="Rest API"
          p="Spring + MySql + AWS"
        />
        <ProjectCard
          src={kotlin}
          link="https://github.com/hada97/kotlin-api"
          h3="Rest API"
          p="API Kotlin"
        />
        <ProjectCard
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="Pokedex JS"
          p="API consumption"
        />
        <ProjectCard
          src={py}
          link="https://colab.research.google.com/github/hada97/data_visualization_Imigracao_01/blob/main/Data_visualization_Imigra%C3%A7%C3%A3o01.ipynb#scrollTo=13EnuLOB3o-f"
          h3="Data Analysis"
          p="Python notebook"
        />
        <ProjectCard
          src={node}
          link="https://3m82nyzpy9.us-east-1.awsapprunner.com/docs/"
          h3="Node Rest API"
          p="MongoDB + Docker + AWS"
        />
        <ProjectCard
          src={apijava}
          link="https://github.com/hada97/alurafood"
          h3="Rest API"
          p="Microservices"
        />
          <ProjectCard
          src={jv}
          link="https://github.com/hada97/workshopmongo"
          h3="Rest API"
          p="Spring API + MongoDB"
        />
      </div>
    </section>
  );
}

export default Projects;
