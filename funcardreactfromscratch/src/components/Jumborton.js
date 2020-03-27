import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react'

function Jumborton() {
  return (
    <div className="App">
    <Jumbotron>
<span><h1>Hello👋, I'm Krishna!😊</h1></span>
<span><p className="about">
I'm Third Year CSE undergrad student My Passion is For Computers in all kind of Perspectives .I am Learning FullStack Developer(MERN🧱) 
and i also like Contribute to opensource projects 👉🔧.I buid ⚙ things related to Web Devlopment/FrameWorks(React❤)👉On
<a href="https://github.com/krishnadevz" target="_blank"><Button variant="dark">Github</Button></a>
I also write things about web Development and reactHooks Crossed 7.5K+Views👉On 
<a href="https://dev.to/krishnakakade" target="_blank"><Button variant="dark">Dev.to</Button></a>
Connect me Professionally 👉On<a href="https://www.linkedin.com/in/krishna-kakade-014a70149/" target="_blank"><Button variant="dark">LinkedIn</Button></a>
I Crossed 9.1K Views👉On<a href="https://www.quora.com/profile/Krishna-Kakade-2" target="_blank"><Button variant="dark">Quora</Button></a>
<b>
.Thank You🐱‍🏍</b>
</p></span>
<p>
  <Button variant="primary">Learn more</Button>
</p>
</Jumbotron>
    </div>
  );
}
export default Jumborton;