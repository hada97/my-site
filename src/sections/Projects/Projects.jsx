import styles from "./ProjectsStyles.module.css";
import vollmed from "../../assets/java.png";
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
import taxi from "../../assets/taxi.png";
import dog from "../../assets/dog.png";
import memorize from "../../assets/memory.png";
import burguer from "../../assets/burguer.png";
import mpc from "../../assets/mpc.png";
import city from "../../assets/city.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webfull}
          link="https://github.com/hada97/api-vollmed-front"
          h3="Full Stack Clinic"
          p="Java | MySQL"
        />

        <ProjectCard
          src={livechat}
          link="https://github.com/hada97/livechat"
          h3="Web Livechat"
          p="Java | Websocket"
        />

        <ProjectCard
          src={taxi}
          link="https://github.com/hada97/taxi-api"
          h3="Full Stack Taxi"
          p="Java | OpenStreetMap | PostgreSQL"
        />

        <ProjectCard
          src={vollmed}
          link="https://github.com/hada97/vollmed-mysql"
          h3="Spring API"
          p="MySQL | Azure"
        />

        <ProjectCard
          src={dog}
          link="https://github.com/hada97/tinderPet"
          h3="Full Stack App"
          p="Java | Oauth2 | MySQL"
        />

<ProjectCard
          src={city}
          link="https://github.com/hada97/CityVibe"
          h3="App For Events"
          p="Java | Oauth2 | H2"
        />

        <ProjectCard
          src={kotlin}
          link="https://github.com/hada97/kotlin-api"
          h3="Rest API"
          p="Spring | Kotlin"
        />

        <ProjectCard
          src={apijava}
          link="https://github.com/hada97/alurafood"
          h3="Microservices"
          p="Java Microservices"
        />

        <ProjectCard
          src={burguer}
          link="https://github.com/hada97/challenge-fastfood"
          h3="Api Fast Food"
          p="Java | Swagger | Junit"
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
          p="FastAPI | Azure"
        />
        <ProjectCard
          src={node}
          link="https://github.com/hada97/node-api-livraria"
          h3="Rest API"
          p="Node | MongoDB | Express"
        />

        <ProjectCard
          src={workshop}
          link="https://github.com/hada97/workshopmongo"
          h3="App Full stack"
          p="Spring | MongoDB | Azure"
        />

        <ProjectCard
          src={jvapic}
          link="https://github.com/hada97/consulta-cep"
          h3="API consumption"
          p="Java | Spring"
        />

        <ProjectCard
          src={pythonat}
          link="https://github.com/hada97/colecionador-de-cambio"
          h3="Python Automation"
          p="Python | Selenium"
        />

        <ProjectCard
          src={kanban}
          link="https://hada97.github.io/kanban/"
          h3="Kanban Board"
          p="HTML | CSS | JS"
        />

        <ProjectCard
          src={poke}
          link="https://github.com/hada97/pokedex"
          h3="API consumption"
          p="HTML | CSS | JS"
        />

        <ProjectCard
          src={memorize}
          link="https://github.com/hada97/memorize"
          h3="Memory game"
          p="HTML | CSS | JS"
        />

        <ProjectCard
          src={starwars}
          link="https://github.com/hada97/star-wars-cliente"
          h3="API consumption"
          p="HTML | CSS | JS"
        />

        <ProjectCard
          src={mpc}
          link="https://github.com/hada97/mpc"
          h3="Drums + API Recorder"
          p="HTML | CSS | JS"
        />
      </div>
    </section>
  );
}

export default Projects;
