import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiCpanel,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col title="VS Code" xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col title="Cpanel" xs={4} md={2} className="tech-icons">
        <SiCpanel />
      </Col>
      <Col title="Postman" xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col title="windows OS" xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col title="Heroku" xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
