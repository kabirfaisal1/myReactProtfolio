import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { SiCsharp, SiMysql,
  SiCypress,SiSelenium, SiJava, SiJavascript,
  SiMongodb, SiGit,SiReact } from "react-icons/si";
import {
  DiNodejs,
} from "react-icons/di";


function Techstack() {
  return (
    <Container fluid className='home-skills-section' data-test-id="professional-skill-set" id='skills'>
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
    </Row>
    </Container>
    </Container>
  );
}

export default Techstack;
