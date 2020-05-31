import React,{useEffect,useState} from 'react';
import './App.css';

function About() {
  useEffect(() => {
    fetchItems();
  },[]);
  const [items,setItems]=useState([]);
  const fetchItems= async () =>{
    const data = await fetch('https:/fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items= await data.json();
    console.log(items);
    setItems(items)
  };
  return (
    <div>
    <h1>About Page</h1>
    <p className="about">
    Hello to all i hope my #100DaysOfCode Journey will motivate you🙏
I started my #100daysofcode journey on 19 December 2019
and I completed my overall challenge on 26 April 2020.

My Whole Life Story from child to Code

hello there good morning/afternoon/evening/night when I was a kid mostly not able to stay at the home. but my after my schooling started and I was bullied by many folks/students in school and colony also after that I mostly spend time with my grandparents and mother and I always like to go the holidays to my mother home and today also 


</p>
</div>
  )}

export default About;
