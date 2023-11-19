import { Col, Container, Tab , Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const MyProjects = () => {

    const projects = [
        {
            title: "FinTrack+",
            description: "Go To This Project",
            imgUrl: projImg1,
            link: "https://www.figma.com/file/FpQXfyWB4lImHUC3vhY4Ic/FinTrack%2B?type=design&node-id=1%3A290&mode=design&t=RwNLfmzvF9lsC868-1",
        },
        {
            title: "FTI Access",
            description: "Go To This Project",
            imgUrl: projImg2,
            link: "https://www.figma.com/file/59NX4Hk8j7dE7JJ67D458S/App-FTI-Untar---Software-Development?type=design&node-id=0%3A1&mode=design&t=8hF0KQq5SVwiUajO-1",
        },
        {
            title: "Whoo App Revamp",
            description: "Go To This Project",
            imgUrl: projImg3,
            link: "https://www.figma.com/file/FNsiVbkMP2xlae4tMmvSsC/whoo!-App-Revamp?type=design&node-id=2%3A4&mode=design&t=xyuH3BSOBC8ezQt0-1",
        },
        {
            title: "Untar Alumni Website",
            description: "Go To This Project",
            imgUrl: projImg4,
            link: "https://www.figma.com/file/TdYoEuBImW2eNQITAOl69S/Website-Alumni-Untar?type=design&node-id=62%3A246&mode=design&t=wiuGuqVhBpsAIsTR-1",
        },
        {
            title: "Research & Community Service Management Website",
            description: "Go To This Project",
            imgUrl: projImg5,
            link: "https://www.figma.com/file/tNPqd6uz3wVJ1asBbRoEWn/FInal-Penelitian-%26-PKM?type=design&node-id=1702%3A3262&mode=design&t=OMxj15Tm558Lz64i-1",
        },
        {
            title: "Document Management and New Student Registration Program",
            imgUrl: projImg6,
        },
        {
            title: "Tourist Destination Website",
            description: "Go To This Project",
            imgUrl: projImg7,
            link: "https://williamantoniuss.github.io/UTS_825210028/blog.html#",
        },
        {
            title: "Food Price Analysis Using Python",
            description: "Go To This Project",
            imgUrl: projImg8,
            link: "https://colab.research.google.com/drive/1IKsP4XXbYGEkYggH2tJPzLALOGqh13M3?usp=sharing",
        },
        {
            title: "Coming Soon !",
            imgUrl: projImg9
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <h2>Projects</h2>
                        <p>
                            Here are some of the projects I've worked on during my journey in the field of information technology. Moving forward, I aim to undertake more challenging projects to further enhance my skills and expertise in this domain. I am committed to continuous growth and development in the ever-evolving field of technology.</p>
                        </div> }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                   <ProjectCard
                                                   key={index}
                                                   {...project}
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"></Tab.Pane>
                                <Tab.Pane eventKey="third"></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}