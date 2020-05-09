import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function Cards() {
    return (
        <div className="app">
           <Card style={{ width: '18rem' }}>
           <a href="#" class="fa fa-twitter"></a><h6 className="h6">Jack Dorsey</h6>
  <Card.Body className="card">
    <Card.Title><b>Jack Tweets</b></Card.Title>
    <Card.Text>
    Just setting up my twttr
    </Card.Text>
    <input type="date" id="start" name="trip-start"
       value="2006-10-22"
       min="2006-10-22" max="2006-10-22"></input>
  </Card.Body>
  <ListGroup className="list-group-flush">

    <ListGroupItem></ListGroupItem>
  </ListGroup>
  <Card.Body>
  <i class="fa fa-heart" style={{fontSize:"24px",color:"red",  justifyContent: "space-between"
}}></i>
  <i class="fa fa-square" style={{fontSize:"24px",color:"grey",  justifyContent: "space-between"}}></i>
  <i class="fa fa-share" style={{fontSize:"24px",color:"grey",  justifyContent: "space-between"}}></i>

  </Card.Body>
</Card> 
        </div>
    )
}
