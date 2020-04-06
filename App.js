import React ,{useState} from 'react';
import './App.css';


let message='Unlocked';
fetch('https://icanhazdadjoke.com/',{
  headers:{
  'Accept':'application/json'
  }
})
  .then(res=>res.json())
  .then(res=>res&&res.joke)
  .then(joke=>message=joke);




function Grandy(isOpen){
  return    isOpen && <p>{message}</p>

}
function App() {
  const password =[2,2,3];
  const [digits ,setDigits]=useState([0,0,0]);
  const [isUnlocked,setIsUnlocked,isOpen]=useState(false);



  let setDigitAtIndex=(digit,idx)=>{
    setDigits((currentDigits)=>
      [
        ...currentDigits.slice(0, idx),
        digit,
        ...currentDigits.slice(idx  + 1)
      ]
    );
  };






  let checkPassword=() =>{
    for (let i=0;i<password.length;i++){
      if(password[i]!==digits[i]){
        setIsUnlocked(false);
        return;
      }
    }
    setIsUnlocked(true);

  }
  return (
    <section>
    <h1>Your In Or Not🔌</h1>
    <div style={{display:"flex",flexDirection:'column', textAign:"center"}}></div>
      <div style={{display:'flex'}}>
      <input type="number" value={digits[0]}
       onChange={(event) => setDigitAtIndex(parseInt(event.target.value),0)}/> 

     
      <input type="number" value={digits[1]}
           onChange={(event)=>setDigitAtIndex(parseInt(event.target.value),1)}/>
      <input type="number" value={ digits[2]}
            onChange={(event)=>setDigitAtIndex(parseInt(event.target.value),2)}/>




      </div>
      <button onClick={()=>checkPassword()}>Press Me</button>
      <Grandy isOpen={isUnlocked}/>
    </section>
  );
}

export default App;
