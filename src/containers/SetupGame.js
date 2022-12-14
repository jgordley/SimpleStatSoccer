import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./SetupGame.css";
import { useDispatch } from 'react-redux'
import { setPlayers } from '../features/counter/counterSlice';
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {

    const dispatch = useDispatch();

    const [playerNames, setPlayerNames] = useState([]);
    const [playerNumbers, setPlayerNumbers] = useState([]);

    function changePlayerNames(event, index) {
        console.log(event.target.value)
        let items = [...playerNames];
        items[index] = event.target.value;
        setPlayerNames(items);
    }

    function changePlayerNumbers(event, index) {
        let items = [...playerNumbers];
        items[index] = event.target.value;
        setPlayerNumbers(items);
    }

    function addPlayer() {
        let names = [...playerNames];
        names.push('');
        setPlayerNames(names);

        let numbers = [...playerNumbers];
        numbers.push('');
        setPlayerNumbers(numbers);
    }

    function removePlayer(event, index) {
        let names = [...playerNames];
        names.splice(index, 1);
        setPlayerNames(names);

        let numbers = [...playerNumbers];
        numbers.splice(index, 1);
        setPlayerNumbers(numbers);
    }

    return (
        <div className="SetupGame">
            <h1>Configure Roster</h1>
            <Row className="setupRow">
                <Col md="6">
                    <Row>
                        <Col md="8">Name</Col>
                        <Col md="2">#</Col>
                    </Row>
                    <Form>

                        <Form.Group className="mb-3" controlId='setPlayerNames'>
                            {playerNames.map((name, idx) => (
                                <Row key={idx} className="playerNameRow">
                                    <Col md="8">
                                        <Form.Control type="text" value={name} onChange={(e) => changePlayerNames(e, idx)} placeholder="Cristiano Ronaldo" />
                                    </Col>
                                    <Col md="2">
                                        <Form.Control type="text" value={playerNumbers[idx]} onChange={(e) => changePlayerNumbers(e, idx)} placeholder="7" />
                                    </Col>
                                    <Col md="2">
                                        <Button variant="danger" onClick={(e) => removePlayer(e, idx)}>
                                            x
                                        </Button>
                                    </Col>

                                </Row>
                            ))}
                        </Form.Group>

                        <Button variant="success" onClick={addPlayer}>
                            Add Player
                        </Button>
                    </Form>
                </Col>
                <Col md="6">
                    <img class="coachimg" src="https://images.unsplash.com/photo-1585757318177-0570a997dc3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="coach"></img>
                    <br></br>
                    <br></br>
                    <LinkContainer to="/game">
                        <Button variant="primary" onClick={() => dispatch(setPlayers([playerNames, playerNumbers]))}>
                            Continue
                        </Button>
                    </LinkContainer>
                </Col>
            </Row>
        </div>
    );
}