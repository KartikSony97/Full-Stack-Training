import React, {useReducer} from 'react';   

const initial = 0;

const reducer = (state, action) =>{
    console.log(state, action);
    if(action.type ==='INCREMENT') {
        return state +1;
    }
    if(action.type === 'DECREMENT'){
        return state -1;
    }
    return state;
} 

const UseReducer = () => { 
    const [state, dispatch] = useReducer(reducer, initial)

return(
    <div>
        <p>{state}</p>
        <div>
            <button onClick={()=> dispatch({type:"INCREMENT"})}>Increament</button>
            <button onClick={()=> dispatch({type:"DECREMENT"})}>Decreament</button>
        </div>

    </div>
   )
}

export default UseReducer