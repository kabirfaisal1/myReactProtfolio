import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container data-test-id="portfolio-footer" fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Kabir Faisal: Portfolio</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kabirfaisal1"
                style={{ color: "white" }}
                target="_blank" 
            
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://www.linkedin.com/in/kabirfaisal89"
                style={{ color: "white" }}
                target="_blank" 
              >
                <AiFillLinkedin />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
