import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/images/avatar.png";
import badge from "../assets/images/badge.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { TbAward } from "react-icons/tb";
import Home from "./home/Home";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,

  AiOutlineAim,

} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand data-test-id="app-logo" className="d-flex">
          <img src={logo} width="80" height="80" className="navbar-brand" alt="myLogo" />

        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                data-test-id="nav-home"
                as={Link} to={"/"}
                onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                data-test-id="nav-skills"
                as={Link}
                to="/Skills"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineAim style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                data-test-id="nav-project"
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                data-test-id="nav-resume"
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                data-test-id="nav-credential"
                href="https://columbia.credential.getsmarter.com/efd09c72-f7f9-4cc6-ba05-2231eb11daa7#gs.up598s"
                target="_blank"
                onClick={() => updateExpanded(false)}>
                <TbAward style={{ marginBottom: "2px" }} /> Show credential
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                data-test-id="nav-gitHub-link"
                href="https://github.com/kabirfaisal1/myReactProtfolio.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavBar;
