// import {useParams,Link} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react';
import {retrieveHelloWorldBean,retrieveHelloWorldPathVariable} from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

export default function WelocomeComponent(){

    const {name} = useParams()
    const [message, setMessage] = useState(null)
    const authContext = useAuth()



    // function callRestApi(){
    //     // axios.get('http://localhost:8080/hello-world-bean')
    //     retrieveHelloWorldBean()
    //         .then( (response) => successResponse(response) )
    //         .catch( (error) => errorResponse(error) )
    //         .finally( () => console.log("finally") )
    // }

    function callRestApi(){
        // axios.get('http://localhost:8080/hello-world-bean')
        retrieveHelloWorldPathVariable(authContext.name,authContext.token)
            .then( (response) => successResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log("finally") )

    }
    function successResponse(response){
        setMessage(response.data.message)
        console.log(response)

    }
    function errorResponse(error){
        console.log(error)
    }

    return(
        <div>
            <h1> Welcome {name}</h1>
            <div className="WelocomeComponent">
                 <Link to='/todos'>Your Todos</Link>
            </div>
            <div>
                <button className='btn btn-success m-3' onClick={callRestApi}>
                    Call Rest Api
                </button>
            </div>
            <div className='message'>
                {message}
            </div>
                
        </div>   
     )
}