import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/java.png';
import poke from '../../assets/pkb.png';
import py from '../../assets/python.png';
import node from '../../assets/node-js.png';
import apijava from '../../assets/cu.png';
import ProjectCard from '../../common/ProjectCard';
import kotlin from '../../assets/kt.png';
import workshop from '../../assets/workshop.png';
import jvapic from '../../assets/javaapic.png';
import pythonat from '../../assets/pythonat.png';
import starwars from '../../assets/starwars.png';


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
    
        <ProjectCard
          src={viberr}
          link="https://github.com/hada97/spring-boot-vollmed"
          h3="Rest API"
          p="Spring + PostgreSQL + AWS"
        />
        <ProjectCard
          src={kotlin}
          link="https://ko-hudjg9fxbfbagsbg.brazilsouth-01.azurewebsites.net/swagger-ui/index.html"
          h3="Rest API"
          p="Spring + Kotlin + Azure"
        />
        <ProjectCard
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="API consumption"
          p="HTML + CSS + JS"
        />
        <ProjectCard
          src={py}
          link="https://colab.research.google.com/github/hada97/data_visualization_Imigracao_01/blob/main/Data_visualization_Imigra%C3%A7%C3%A3o01.ipynb#scrollTo=13EnuLOB3o-f"
          h3="Data Analysis"
          p="Python notebook"
        />
        <ProjectCard
          src={node}
          link="ttps://github.com/hada97/nodeapi/"
          h3="Rest API"
          p="MongoDB + Node + AWS"
        />
        <ProjectCard
          src={apijava}
          link="https://github.com/hada97/alurafood"
          h3="Rest API"
          p="Spring Cloud MS"
        />

        <ProjectCard
          src={workshop}
          link="https://workshop-workshop.onrender.com/swagger-ui/index.html"
          h3="Rest API"
          p="Spring + MongoDB + Azure"
        />

        <ProjectCard
          src={jvapic}
          link="https://github.com/hada97/consulta-cep"
          h3="API consumption"
          p="Java + Spring"
        />

        <ProjectCard
          src={pythonat}
          link="https://github.com/hada97/colecionador-de-cambio"
          h3="Python Automation"
          p="Python + Selenium + GI"
        />

        <ProjectCard
          src={starwars}
          link="https://github.com/hada97/star-wars-cliente"
          h3="API consumption"
          p="HTML + CSS + JS"
        />
        
      </div>
    </section>
  );
}

export default Projects;
