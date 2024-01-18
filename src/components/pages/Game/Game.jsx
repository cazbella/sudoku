import React from 'react';
import "./Game.css"; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import MotivationButton from '../../Giphy/GameMotivation';

const Game = (props) => {
  const handleMotivateClick = () => {
    setShowModal(true);
    console.log("Motivate Me button clicked!");

  };

  console.log("This is motivation in game jsx",props)
  return (
    <Container className="mt-5">
      {/* Game Board */}
      <Row className="justify-content-center">
        <Col xs={9}>
        <div className="game-board">
            {/* Static 9x9 grid */}
            <Row className="game-row">
              <Col className="game-square">1</Col>
              <Col className="game-square">2</Col>
              <Col className="game-square">3</Col>
              <Col className="game-square">4</Col>
              <Col className="game-square">5</Col>
              <Col className="game-square">6</Col>
              <Col className="game-square">7</Col>
              <Col className="game-square">8</Col>
              <Col className="game-square">9</Col>
            </Row>
            <Row className="game-row">
              {/* Repeat for each row */}
              {/* ... */}
            </Row>
            {/* Repeat for each row */}
            {/* ... */}
          </div>
        </Col>
        {/* Score Container */}
        <Col xs={3} className="text-right">
          <div className="score-container">
            <p>Score: 0</p>
          </div>
        </Col>
      </Row>

      {/* Buttons */}
      <Row className="mt-3">
        <Col>
          <Button variant="primary">Gamble</Button>
        </Col>
        <Col className="text-center">
          <p className="m-0">or</p>
        </Col>
        <Col className="text-right">
          <MotivationButton />
        </Col>
      </Row>

      {/* Solution Button */}
      <Row className="mt-3">
        <Col className="text-center">
          <Button variant="warning">Solution</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
