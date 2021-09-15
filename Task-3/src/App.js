import React, {useState, useEffect} from 'react';
import "./App.css";

const App = () => {
  //var val = 'Hello World..!';
  const [Name, setName] = useState('Hello World..!');
  var [Val, setVal] = useState(0);
  const[Profile, setProfile] = useState('User posts');


  const someChanges = () => {
    if(Name === 'Hey Kartik, Whats up!') 
      (setName('Hello World..!')) 
    
    else {
      setName('Hey Kartik, Whats up!');
    }    
  }

  console.log(Name);   //just for test
  
  const increament = () => {    
    setVal(Val + 1);
  }
  
  useEffect(() => {                                               //Here I am using useEffect 
    console.log(`${Val}Use Effect mounted on every single changes`);    
  })
  console.log(Val);   //just for test
  

  const decreament = () => {    
    setVal(Val - 1);
  }
  
   return (
    <div>
      <h1>{Name}</h1>
      <button className="btn" onClick={someChanges}>Click to change</button>
      <hr></hr>
      <button className="btn" onClick={increament}>+</button>
      <h1>{Val}</h1>
      <button className="btn" onClick={decreament}>-</button>
      <hr></hr>
      <button className="btn" onClick={() => setProfile('Kartik')}>Kartik's Profile</button>  
      
      <button className="btn" onClick={() => setProfile('Anagha')}>Anagha's Profile</button>

      <button className="btn" onClick={() => setProfile('Custom')}>Costom Profile</button>
      <h1>{Profile}</h1>
    </div>
  )
   }
   export default App

 /* const increament = () => {    
    setVal(Val + 1);
  }
   return (
    <div>
      <button className="btn" onClick={increament}>+</button>
      
    </div>
  )
}

function changed() {
  return (
    <div>
      <App/>
      <increament/>
    </div>
  )
} 

export default changed;
*/