import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <b className="purple">Assalamu Alaikum,</b> <br></br>
            Hi Everyone, I am <span className="purple">Mir Rahat </span>
            from  Tangail, Dhaka, Bangladesh. 
            <br />I studied at <b className="purple">Nanjing University of Information Science and Technology</b> in China.
             I graduated from China with a degree in <b className="purple">computer science and technology.</b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "and he[Allah] found you lost and guided[you]!"{" "}
          </p>
          <footer className="blockquote-footer">ad-duhaa, Quran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
