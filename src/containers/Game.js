import React, { useState } from "react";
import { Col, Row, Button, ListGroup } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { CSVLink } from "react-csv";
import './GameStyles.css';

export default function Game() {

    const reduxNames = useSelector((state) => state.counter.playerNames);
    const reduxNumbers = useSelector((state) => state.counter.playerNumbers);

    const actions = ['pass', 'shot', 'skill move', 'throw in', 'freekick', 'save'];

    const shotOptions = ['on goal', 'not on goal', 'scored'];

    const skillOptions = ['stepover', 'rabona', 'nutmeg', 'flick'];

    const freeKickOptions = ['pass', 'cross', 'shot', 'trick play'];

    const saveOptions = ['caught', 'deflected in play', 'deflected out of bounds'];

    const [activePlayerIndex, setActivePlayerIndex] = useState(-1);
    const [actionIndex, setActionIndex] = useState(-1);
    const [targetIndex, setTargetIndex] = useState(-1);

    const [events, setEvents] = useState([]);

    function generateData() {
        let separateEvents = [];
        events.forEach(event => {
            separateEvents.push([event])
        });
        console.log(separateEvents);
        return [separateEvents];
    }

    function clearEvent() {
        setActivePlayerIndex(-1);
        setActionIndex(-1);
        setTargetIndex(-1);
    }
    
    function saveEvent() {
        if(actionIndex < 0 || activePlayerIndex < 0 || targetIndex < 0) {
            alert('Invalid action! Please select all 3 categories');
        }

        let newEventString = '';

        switch (actionIndex) {
            case 0:
                newEventString = reduxNames[activePlayerIndex] + ' passed to ' + reduxNames[targetIndex];
                break;
            case 1:
                newEventString = reduxNames[activePlayerIndex] + ' took a shot ' + shotOptions[targetIndex];
                break;
            case 2:
                newEventString = reduxNames[activePlayerIndex] + ' did a ' + skillOptions[targetIndex];
                break;
            case 3:
                newEventString = reduxNames[activePlayerIndex] + ' threw the ball in to ' + reduxNames[targetIndex];
                break;
            case 4:
                newEventString = reduxNames[activePlayerIndex] + ' took a freekick, which was a ' + freeKickOptions[targetIndex];
                break;
            case 5:
                newEventString = reduxNames[activePlayerIndex] + ' made a save which was ' + saveOptions[targetIndex];
                break;
            default:
                newEventString = 'action error';
                break;
        }
        setEvents([...events, newEventString]);

        clearEvent();
    }

    function RenderTarget() {
        
        if (actionIndex > -1) {
            switch (actionIndex) {
                case 0:
                    return (
                        <div>
                            {reduxNames.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                case 1:
                    return (
                        <div>
                            {shotOptions.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                case 2:
                    return (
                        <div>
                            {skillOptions.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                case 3:
                    return (
                        <div>
                            {reduxNames.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                case 4:
                    return (
                        <div>
                            {freeKickOptions.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                case 5:
                    return (
                        <div>
                            {saveOptions.map((name, idx) => (
                                <div>
                                    {targetIndex === idx ?
                                        <Button variant="success" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                        :
                                        <Button variant="secondary" onClick={() => setTargetIndex(idx)} className="playerNameButton">{name}</Button>
                                    }
                                    <br></br>
                                </div>
                            ))}
                        </div>
                    );
                default:
                    return '';
            }
        }

        return ''

    }

    return (
        <div className="SetupGame">
            <h1>Game in progress</h1>
            <Row className="setupRow">
                <Col md="2">
                    <h4>Players</h4>
                    {reduxNames.map((name, idx) => (
                        <div>
                            {activePlayerIndex === idx ?
                                <Button variant="success" onClick={() => setActivePlayerIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                                :
                                <Button variant="secondary" onClick={() => setActivePlayerIndex(idx)} className="playerNameButton">{reduxNumbers[idx]} {name}</Button>
                            }
                            <br></br>
                        </div>
                    ))}
                </Col>
                <Col md="2">
                    <h4>Actions</h4>
                    {actions.map((action, idx) => (
                        <div>
                            {actionIndex === idx ?
                                <Button variant="success" onClick={() => setActionIndex(idx)} className="playerNameButton">{action}</Button>
                                :
                                <Button variant="secondary" onClick={() => setActionIndex(idx)} className="playerNameButton">{action}</Button>
                            }
                            <br></br>
                        </div>
                    ))}
                </Col>
                <Col md="2">
                    <h4>Target</h4>
                    <RenderTarget />
                </Col>
                <Col md="2">
                    <h4>Utils</h4>
                    <Button className="utilsButton" variant="primary" onClick={clearEvent}>
                        Clear Event
                    </Button>
                    <Button className="utilsButton" variant="primary" onClick={saveEvent}>
                        Log Event
                    </Button>
                </Col>
                <Col md="4">
                    <h4>Game Log</h4>
                    <ListGroup style={{height: '400px', overflowY: 'scroll', scrollbarWidth: 'none'}}>
                        {events.map((event, idx) => (
                            <ListGroup.Item key={idx}>{event}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <CSVLink data={generateData()}>Download Report</CSVLink>

                </Col>
            </Row>
        </div>
    );
}