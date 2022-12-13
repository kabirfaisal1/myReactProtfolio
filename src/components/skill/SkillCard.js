import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Skillcard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, 
            Apart from coding, some other activities that I love to do!
          </p>
          <ul class="list-group list-group-flush">
            <li className="list-group-item list-group-item-success about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="list-group-item">
              <ImPointRight /> Outdoor sports
            </li>
            <li className="list-group-item list-group-item-info">
              <ImPointRight /> DIY Projects
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Skillcard;
