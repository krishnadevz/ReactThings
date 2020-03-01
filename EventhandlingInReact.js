import React from "react"
import ContactCard from "./ContactCard"
function handleClick(){
  console.log("i was trying to click and check your ip and location")
}

function App(){
    return (
  
<div>
<img onMouseOver={()=>console.log("hovered")}src="https://www.fillmurray.com/200/100"/>
<br></br>
<button onClick={handleClick}>Click me </button>

  </div>



    )
}

export default App
