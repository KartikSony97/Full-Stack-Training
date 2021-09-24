import React, {useState} from 'react';
import './App.css';

function App() {
      const [state, setState] = useState(false);

      const toggle=()=>{
        setState(!state);
      }
        
    return(
        <div className="App">
          <button onClick={toggle} className={'button-on ' + (state? 'button-close':'')}>
            {state? 'close' : 'on'}
          </button>
        </div>
      );
}
export  default App;
