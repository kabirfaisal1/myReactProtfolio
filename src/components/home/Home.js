import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Home2 from "./Home2";
import Type from "./Type";

function Home() {
    return (
        <section>
           <div class="container mt-4" id="mainContainer">
                <h2 class="display-4 mb-4" id="name">
                    <span id="greeting">Hi, I am</span> Kabir Faisal
                    <small class="d-block text-muted" id="job-positions">
                    <Type /></small>
                </h2>
                <div class="row mb-4">
                    <div class="col mb-4 mb-lg-0">
                        <img class="img-fluid img-thumbnail rounded-circle
                            border border-success" id="myimg"
                            src="assets/images/MyPhoto.png" alt="my photo"/>
                    </div>
                    <div class="col-6">
                        <h3 class="display-4 mb-4" id="aboutMe">Who I am</h3>
                        <p>
                            I am a quality engineer and web-developer with a
                            passion for building clean, stream-lined, responsive
                            websites and apps.
                            With a technical background in the various industry,
                            including more than 10 years as a QA Engineer, I
                            have an abundance
                            of experience working with a diverse base of
                            start-up, midsize corporate entities.
                        </p>
                        <p>
                            I have a history of solving problems and creating
                            efficient solutions all while being both
                            self-reliant and a member of a team. I recently
                            received a certificate in Full-Stack Web Development
                            from the Columbia | Engineering Boot Camp.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Home;