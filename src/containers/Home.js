import React from "react";
import { MdSportsSoccer } from "react-icons/md"
import Container from "react-bootstrap/Container";
import "./Home.css";

export default function Home() {

  return (
    <div className="Home">
      <h1>SimpleStat Soccer <MdSportsSoccer /></h1>
      <h3>A simple UI for tracking in-game stats</h3>
      <Container>
        <img src="https://a6p9k9y3.stackpathcdn.com/wp-content/uploads/2021/02/Soccer-field-marking-soccer-field-diagram.png" className="soccerimg" alt="field"></img>
      </Container>
    </div>
  );
}