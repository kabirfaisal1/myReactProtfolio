import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectItem from "./projectData"
// import noteTaker from "../../assets/Projects/noteTake.png";
// import shoppers from "../../assets/Projects/shopper.png";
// import emTracker from "../../assets/Projects/EmployeeTracker.png";
// import teamProfile from "../../assets/Projects/teamProfile.png";
// import workDay from "../../assets/Projects/WorkDay.png";
// import techBlog from "../../assets/Projects/techBlog.png";
// import weather from "../../assets/Projects/weather.png";
import jsQuiz from "../../assets/Projects/jsQuiz.png";
// import socialNetwork from "../../assets/Projects/socialNetwork.png";
// import pwgenerator from "../../assets/Projects/pwgenerator.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";



function Projects() {
    return (
        <div style={{ fontSize: 'large' }}>
           
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Projects </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row data-test-id="project-cards" style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    {projectItem.cardData.map((project, index) => {
                        return (
                            <Col md={4} className="project-card">

                                <ProjectCard
                                    imgPath={jsQuiz}
                                    isBlog={false}
                                    title={project.title}
                                    description={project.description}
                                    ghLink={project.ghLink}
                                    siteLink={project.siteLink}
                                />
                            </Col>
                        )
                    })}
                </Row>
                {/* </Col> */}
            </Container>
        </div>
    )
};
export default Projects;
console.log(projectItem.cardData)