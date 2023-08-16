import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import "../game.css";

export default function ClassicSpeed() {
  const socket = io("http://localhost:5050");
  const [roomNumber, setRoomNumber] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [opponentName, setOpponentName2] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setPlayerName(userName);
    socket.emit("userJoined", userName);
    socket.on("joinedRoom", (roomNumber) => {
      console.log("Joined room:", roomNumber);
      setRoomNumber(roomNumber);
    });
  }, []);

  useEffect(() => {
    socket.on("roomFull", (roomNumber) => {
      console.log("Room full:", roomNumber);
    });
  }, []);

  return (
    <div>
      <h1>{roomNumber}</h1>
      <Container>
        <Row xs={12} md={4}>
          <Col xs={12} md={8}>
            Player 2 Hand
          </Col>
          <Col xs={12} md={4}>
            Player 2 Draw Deck
          </Col>
        </Row>
        <Row xs={12} md={4}>
          <Col xs={12} md={3}>
            Left Pull Pile
          </Col>
          <Col xs={12} md={3}>
            Left Play Pile
          </Col>
          <Col xs={12} md={3}>
            Right Play Pile
          </Col>
          <Col xs={12} md={3}>
            Right Pull Pile
          </Col>
        </Row>
        <Row xs={12} md={4}>
          <Col xs={12} md={8}>
            Player 1 Hand
          </Col>
          <Col xs={12} md={4}>
            Player 1 Draw Deck
          </Col>
        </Row>
      </Container>
    </div>
  );
}
