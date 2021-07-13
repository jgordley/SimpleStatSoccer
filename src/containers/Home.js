import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import John from "../images/john.PNG";
import "./Home.css";

export default function Home() {

  return (
    <div className="Home">
      <h1>Base React Template</h1>
      <h3>John Gordley</h3>
      <hr></hr>
      <Row>
        <Col md="6" className="LeftSide">
          <Container>
            <p>This is a basic react template set up with react router and react bootstrap for quick react project startup.</p>
            <p>Change the Routes.js routes and add new containers to implement new pages.</p>
          </Container>
        </Col>
        <Col md="6">
          <img className="JohnImg" src={John} alt="John"></img></Col>
      </Row>

    </div>
  );
}