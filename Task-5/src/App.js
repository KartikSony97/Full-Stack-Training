import { create } from 'jss';
import {render} from 'react-dom'
import React, {useState} from 'react';
import { createUseStyles } from "react-jss";
//import injectSheet, { ThemeProvider } from 'react-jss';

const useButtonStyle= createUseStyles({
    buttonOn:{
    height : 50,
    width : '50%',
    backgroundColor : 'Blue',
    marginleft : 100,
    justifyContent: 'center'
  },
  buttonOff:{
    height : 50,
    width : '50%',
    backgroundColor : 'Red',
    marginleft : 100,
    justifyContent: 'center'
  }
})

 function App(){
  const [state, setState] = useState(false);

  const toggle=()=>{
    setState(!state);
  }
  const classes = useButtonStyle()
  return(
    <div>
     <button onClick={toggle} className={state? classes.buttonOn:classes.buttonOff}>
        {state? 'ON' : 'OFF'}
     </button>
</div>
  )
}
export default App;

