import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Kabir Faisal: Protfolio</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
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
                href="www.linkedin.com/in/kabirfaisal89"
                style={{ color: "white" }}
                target="_blank" 
               
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
