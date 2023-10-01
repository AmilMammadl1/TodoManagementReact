import { useState } from 'react'
import './Counter.css'
import {PropTypes} from 'prop-types'



export default function CounterButton({by,incrementMethod,decrementMethod}){
    // const buttonStyle = {
    //     fontSize:"20px",
    //     backgroundColor:"coral",
    //     width:"100px",
    //     margin:"19px",
    //     padding:"20px",
    //     color:"white",
    //     borderRadius:"50px"
    // }
    const [count,countSet] = useState(0)


    function incrementCounterFunction(){
        incrementMethod(by) 
        countSet(count+by) 
          
       
    }
    function decrementCounterFunction(){
            decrementMethod(by) 
            countSet(count-by)     
    }
    

    return(
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" 
                onClick={incrementCounterFunction}
                //  style={buttonStyle}
                 >+{by}</button>
                 <button className="counterButton" 
                onClick={decrementCounterFunction}
                 >-{by}</button>
            </div>
        </div>
    )
}
CounterButton.prototype={
    by:PropTypes.number
}
CounterButton.defaultProps={
    by:10
}