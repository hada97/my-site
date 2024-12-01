import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/java.png";
import poke from "../../assets/pkb.png";
import py from "../../assets/python.png";
import node from "../../assets/node-js.png";
import apijava from "../../assets/cu.png";
import ProjectCard from "../../common/ProjectCard";
import kotlin from "../../assets/kt.png";
import workshop from "../../assets/workshop.png";
import jvapic from "../../assets/javaapic.png";
import pythonat from "../../assets/pythonat.png";
import starwars from "../../assets/starwars.png";
import webfull from "../../assets/webfull.png";
import kanban from "../../assets/kanban.png";
import livechat from "../../assets/livechat.png";
import fast from "../../assets/fast.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webfull}
          link="https://github.com/hada97/api-vollmed-front"
          h3="Clinic Full Stack"
          p="Java + MySQL + Front"
        />

        <ProjectCard
          src={livechat}
          link="https://github.com/hada97/livechat"
          h3="Web Livechat"
          p="Java + Websocket"
        />

        <ProjectCard
          src={viberr}
          link="https://github.com/hada97/vollmed-mysql"
          h3="Rest API"
          p="Spring + MySQL + Azure"
        />

        <ProjectCard
          src={kotlin}
          link="https://github.com/hada97/kotlin-api"
          h3="Rest API"
          p="Spring + Kotlin"
        />

        <ProjectCard
          src={apijava}
          link="https://github.com/hada97/alurafood"
          h3="Microservices"
          p="Java Microservices"
        />

        <ProjectCard
          src={py}
          link="https://colab.research.google.com/github/hada97/data_visualization_Imigracao_01/blob/main/Data_visualization_Imigra%C3%A7%C3%A3o01.ipynb#scrollTo=13EnuLOB3o-f"
          h3="Data Analysis"
          p="Python notebook"
        />

        <ProjectCard
          src={fast}
          link="https://github.com/hada97/fastapi"
          h3="Python API"
          p="FastAPI + Azure"
        />
        <ProjectCard
          src={node}
          link="https://github.com/hada97/node-api-livraria"
          h3="Rest API"
          p="MongoDB + Node"
        />

        <ProjectCard
          src={workshop}
          link="https://github.com/hada97/workshopmongo"
          h3="App Full stack"
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
          src={kanban}
          link="https://hada97.github.io/kanban/"
          h3="Kanban Board"
          p="HTML + CSS + JS"
        />

        <ProjectCard
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="API consumption"
          p="HTML + CSS + JS"
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
