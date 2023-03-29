//importacion de las dependencias,utilidades,assets, etc.
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//WebDevelopment Frontend
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';

//3D Design
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.jpg';
import projImg7 from '../assets/img/project-img7.jpg';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/project-img12.png';

//logos Design
import projImg13 from '../assets/img/project-img13.png';
import colorSharp2 from '../assets/img/color-sharp2.png';


export const Projects = () => {

    //aqui vamos a ingresar la informacion de nuestros proyectos web, con un json
    const ProjectsWebDeveloper = [
        {
            title: "PortFolio Desing Responsive",
            description: "Design,HTML,CSS,SAS, JAVASCRIPT",
            imgUrl: projImg1,
        },
        
        {
            title: "Spotify Desktop Desing Responsive",
            description: "Design,HTML,CSS & Sass",
            imgUrl: projImg2,
        },

        {
            title: "Movie Guide Responsive",
            description: "Design,HTML,CSS,JAVASCRIPT",
            imgUrl: projImg3,
        },

        {
            title: "React-App Responsive CV",
            description: "Design,Boostrap-react,JavaScript,React-Hooks",
            imgUrl: projImg4,
        },

    ];

    //aqui vamos a ingresar la informacion de nuestros proyectos 3D, con un json
    const Project3dDesigner = [
        {
            title: "Run!",
            description: "Unreal Engine 4, C#, Zbrush, Substance Painter, 3D Max",
            imgUrl: projImg5,
        },

        {
            title: "Modelado de arma beta call of duty warzone",
            description: "KeyShot, Zbrush, Substance Painter, 3D Max",
            imgUrl: projImg6,
        },

        {
            title: "Modelado para impresion 3D",
            description: "KeyShot, Zbrush, Substance Painter",
            imgUrl: projImg7,
        },

        {
            title: "Diseño de niveles en unreal engine 4",
            description: "Zbrush, Substance Painter, 3D Max, C#",
            imgUrl: projImg9,
        },

        {
            title: "Diseño 3D  fase Beta para EVE ONLINE",
            description: "Zbrush, Substance Painter, 3D Max",
            imgUrl: projImg11,
        },

        {
            title: "Diseño 3D  conjunto casual para GTA ONLINE",
            description: "Zbrush, Substance Painter, 3D Max",
            imgUrl: projImg12,
        },

        {
            title: "Diseño 3D Bot de combate SteamPunk",
            description: "Zbrush, Substance Painter, 3D Max,",
            imgUrl: projImg10,
        },

        {
            title: "Diseño 3D de contextualizacion de obra del artista Zamir Bermeo",
            description: "Zbrush, Substance Painter, KeyShot",
            imgUrl: projImg8,
        },

    ];

    //aqui vamos a ingresar la informacion de nuestros proyectos 3D, con un json
    const ProjectLogoDesigner = [
        {
            title: "Diseño de logo microempresa de tejidos ARTEJER",
            description: "Photoshop, illustrator",
            imgUrl: projImg13,
        },

    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p> Estos son algunos de los projectos que he realizado a lo largo de mi aprendizaje
                            dentro de la programacion Web, diseño 3D y diseño de logos</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey = "first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">3D Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Logo Design</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        ProjectsWebDeveloper.map ((ProjectsWebDeveloper,index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...ProjectsWebDeveloper}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                {
                                        Project3dDesigner.map ((Project3dDesigner,index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...Project3dDesigner}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                        ProjectLogoDesigner.map ((ProjectLogoDesigner,index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...ProjectLogoDesigner}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
    )
}