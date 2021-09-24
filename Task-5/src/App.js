import { create } from 'jss';
import React, {useState} from 'react';
import { createUseStyles } from "react-jss";
//import injectSheet, { ThemeProvider } from 'react-jss';

const useButtonStyle= createUseStyles({
    buttonOn:{
    height : 80,
    width : '100%',
    backgroundColor : 'Blue',
    marginleft : 100,
    justifyContent: 'center'
  },
  buttonOff:{
    height : 80,
    width : '70%',
    backgroundColor : 'Blue',
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
    <button onClick={toggle} className={'{classes.buttonOn}' + (state? '{classes.buttonOff}':'')}>
    {state? 'off' : 'on'}
  </button>
  )
}


export default App;

