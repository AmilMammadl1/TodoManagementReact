import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){
    const [count,countSet] = useState(0)

    function incrementCounterParentFunction(by){
        countSet(count+by)
    }

    function decrementCounterParentFunction(by){
        countSet(count-by)
    }
    function resetCounter(){
        countSet(0)
    }
    
    

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={3} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>

            <button className="resetButton" onClick={resetCounter} >reset</button>     
                 
         </>
    )
}



 