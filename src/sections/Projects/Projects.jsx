import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/jj.png';
import poke from '../../assets/pkb.png';
import py from '../../assets/py.jpg';
import node from '../../assets/node.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/hada97/spring-boot-api-rest"
          h3="API vollmed"
          p="Java + Spring Api"
        />
        <ProjectCard
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="Pokedex"
          p="JS game"
        />
        <ProjectCard
          src={py}
          link="https://colab.research.google.com/github/hada97/data_visualization_Imigracao_01/blob/main/Data_visualization_Imigra%C3%A7%C3%A3o01.ipynb#scrollTo=13EnuLOB3o-f"
          h3="Data Analysis"
          p="Python notebook"
        />
        <ProjectCard
          src={node}
          link="https://github.com/hada97/nodeapi"
          h3="Crud Rest AP"
          p="Node.js"
        />
      </div>
    </section>
  );
}

export default Projects;
