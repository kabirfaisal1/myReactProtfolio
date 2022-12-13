import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import myAvtar from '../../assets/images/MyAvtar.png'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2 () {
  return (
    <Container fluid className='home-skills-section' id='skills'>
      <Container>
        <Row>
          <Col data-test-id="home-page-introduce" md={8} className='home-skills-description'>
            <h1  style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p>
              I am a quality engineer and web-developer with a passion for
              building clean, stream-lined, responsive websites and apps. With a
              technical background in the various industry, including more than
              10 years as a QA Engineer, I have an abundance of experience
              working with a diverse base of start-up, midsize corporate
              entities.
            </p>
            <p>
              I have a history of solving problems and creating efficient
              solutions all while being both self-reliant and a member of a
              team. I recently received a certificate in Full-Stack Web
              Development from the Columbia | Engineering Boot Camp.
            </p>
          </Col>
          <Col data-test-id="home-page-avtar" md={4} id='myAvtar'>
            <Tilt>
              <img
                src={myAvtar}
                width='200'
                height='200'
                className='img-fluid'
                alt='avatar'
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-skills-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-skills-social-links'>
              <li data-test-id= "connect-via-icons" className='social-icons'>
                <a
                  data-test-id="connect-via-gitHub"
                  href='https://github.com/kabirfaisal1'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                   data-test-id="connect-via-linkedin"
                  href='www.linkedin.com/in/kabirfaisal89'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
