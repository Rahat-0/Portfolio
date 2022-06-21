import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiJava,
  DiReact,
  DiNodejs,
  DiCss3,
  DiMysql,
  DiMongodb,
  DiEclipse,
  
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="Java Language" xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col title="Javascript Language" xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col title="NodeJS" xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col title="ReactJS" xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col title="MongoDB" xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col title="MySQL" xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col title="Firebase" xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col title="Eclipse" xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col title="Tailwind CSS" xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
    </Row>
  );
}

export default Techstack;
