import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noteTaker from "../../assets/Projects/noteTake.png";
import shoppers from "../../assets/Projects/shopper.png";
import emTracker from "../../assets/Projects/EmployeeTracker.png";
import teamProfile from "../../assets/Projects/teamProfile.png";
import workDay from "../../assets/Projects/WorkDay.png";
import techBlog from "../../assets/Projects/techBlog.png";
import weather from "../../assets/Projects/weather.png";
import jsQuiz from "../../assets/Projects/jsQuiz.png";
import socialNetwork from "../../assets/Projects/socialNetwork.png";
import pwgenerator from "../../assets/Projects/pwgenerator.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row data-test-id="project-cards" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsQuiz}
              isBlog={false}
              title="JavaScript Quiz"
              description="Worked on a application that build a timed coding quiz with multiple-choice questions for javascript. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code and store users score in localStorage."
              ghLink="https://github.com/kabirfaisal1/JavaScriptQuiz.git"
              siteLink="https://kabirfaisal1.github.io/JavaScriptQuiz/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppers}
              isBlog={false}
              title="Shopper"
              description="With group of team member, we worked on a app to optimize price checker across target and walmart  "
              ghLink="https://github.com/kabirfaisal1/shoppers.git"
              siteLink=" https://morning-bastion-19313.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="Creating a simple five (5) day weather application that allows a user to view five day weater based on there query city. This application will use Third-party APIs to OpenWeather One Call API to retrieve weather data for cities. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. User run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
              ghLink="git clone https://github.com/kabirfaisal1/FiveDayWeather.git"
              siteLink="https://kabirfaisal1.github.io/FiveDayWeather/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workDay}
              isBlog={false}
              title="WorkDay Scheduler"
              description="Createing a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
              ghLink="https://github.com/kabirfaisal1/WorkDayScheduler.git"
              siteLink="https://kabirfaisal1.github.io/WorkDayScheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pwgenerator}
              isBlog={false}
              title="Password Generator"
              description="Working on a application that generated a random password based user-selected criteria. The app runs in the browser and features dynamically updated HTML and CSS powered by your JavaScript code. It has a clean and polished user interface and is responsive, which ensures that it adapts to multiple screen sizes."
              ghLink="https://github.com/kabirfaisal1/PasswordGenerater.git"
              siteLink="https://kabirfaisal1.github.io/PasswordGenerater/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techBlog}
              isBlog={false}
              title="Tech-Blog"
              description="Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies."
              ghLink="https://github.com/kabirfaisal1/Tech-Blog.git"
              // siteLink="https://fktech-blog-14.herokuapp.com" 
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialNetwork}
              isBlog={false}
              title="Social Network API"
              description="This API based app for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js Links to an external site. and Mongoose Links to an external site. packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps."
              ghLink="https://github.com/kabirfaisal1/SocialNetworkAPI.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emTracker}
              isBlog={false}
              title="Employee Tracker"
              description="These interfaces are called content management systems (CMS). My assignment was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL."
              ghLink="https://github.com/kabirfaisal1/EmployeeTracker.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note Taker"
              description="This Application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file."
              ghLink="   https://github.com/kabirfaisal1/NoteTaker.git"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamProfile}
              isBlog={false}
              title="Team Profile"
              description="This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. This project demonstrates use of OOP and TDD using Jest."
              ghLink="https://github.com/kabirfaisal1/teamProfile.git"
             
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
