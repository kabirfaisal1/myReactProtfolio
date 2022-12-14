import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Skillcard from "./SkillCard";
import Origami from "../../assets/images/OrigamiPegasus.png";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              color:"white"
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Skills and <strong className="purple">Hobbies</strong>
            </h1>
            <Skillcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="skill-img"
          >
            <img src={Origami} 
              alt="skill" 
              className="img-fluid"
              style={{ maxHeight: "450px" }}/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skill-set </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      <Github /> 
      </Container>
    </Container>
  );
}

export default Skills;
