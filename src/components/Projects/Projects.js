import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import student from "../../Assets/Projects/student.PNG";
import restaurant from "../../Assets/Projects/restaurant.PNG";
import library from "../../Assets/Projects/library.PNG";
import surokkha from "../../Assets/Projects/surokkha.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surokkha}
              isBlog={false}
              title="Surokkha"
              description="The Surokkha application was developed for the maintenance and registration of vaccines. This application is built using ReactJS and CSS modules."
              link="https://surokka.nuisters.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surokkha}
              isBlog={false}
              title="Portfolio"
              description=""
              link="https://surokka.nuisters.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant"
              description="This is the restaurant website. user can see the menu item, contact us section and reservation table interface. This website is build using raw html5, css3 and javascript. "
              link="https://restaurant.nuisters.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="The project will be known as Library Management System based on web application. There are five modules in LMS, which are Client/student Information module, administration module, Librarian module, Booking Management module, book issuing module. using reactJS, NodeJS, expressJS and MongoDB to build this project"
              link="https://lms.nuisters.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Management System"
              description=" developed as student Academical Activities Managements. There are two sections, students and teachers. Students can see their academic results. and the Teacher can add subjects and numbers for each student. it has used ReactJS, NodeJS, and MongoDB technologies."
              link="https://sms.nuisters.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
