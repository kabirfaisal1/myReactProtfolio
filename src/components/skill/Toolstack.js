import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
  SiPowershell,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiHomebrew,
  SiGithubactions,
  SiInsomnia,
  SiAmazonaws,SiAzuredevops,SiJira
  
} from "react-icons/si";
// import {
//   VscTerminalPowershell
// } from "react-icons/vsc";

function Toolstack() {
  return (
    <Container fluid className='home-skills-section' data-test-id="tools-used" id='skills'>
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHomebrew />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
    </Container>
  </Container>
  );
}

export default Toolstack;
