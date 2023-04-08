import React from "react"
import Card from "react-bootstrap/Card"
import MickeyMouse from './Mickey_Mouse.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MickeyMouse} />
        {"https://github.com/Maktor/"}
        <Card.Body>
            <Card.Title>Mahdyar Bahreman</Card.Title>
            <Card.Text>
            In process of learning
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard