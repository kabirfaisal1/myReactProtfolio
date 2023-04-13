import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import projectItem from "./projectData"



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
                            <Col key={index} md={4} className="project-card">

                                <ProjectCard
                                    imgPath={project.img}
                                    alt={`img id:${project.id} title:${project.title}`}
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
