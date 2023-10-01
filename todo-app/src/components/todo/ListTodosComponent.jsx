import { useEffect, useState } from "react"
import { retrieveAllTodosForUsername,retrieveDeleteTodosById } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"
export default function ListTodosComponent(){
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())
    // const todos = [
    //     {id:1, description:'learn react',done:false,targetDate:targetDate},
    //     {id:2, description:'learn react2',done:false,targetDate:targetDate},
    //     {id:3, description:'learn react3',done:false,targetDate:targetDate},
    //     {id:4, description:'learn react4',done:false,targetDate:targetDate}

    // ]

    const [todos,setTodos] = useState([])
    const [message,setMessage] = useState(null)
    const authContext = useAuth()
    const navigate = useNavigate()


    const a = useEffect(
        ()=> refreshTodos()
    )

    function refreshTodos(){
        retrieveAllTodosForUsername(authContext.name)
            .then(response => {
                setTodos(response.data)
            })
    }
    function deleteTodo(id){
        retrieveDeleteTodosById(authContext.name,id)
            .then(
                ()=>{
                     setMessage('Delete Operation is Successful') 
                     refreshTodos()}
            
            )
    }
    function updateTodo(id){
        navigate(`/todo/${id}`)
    }
    function addNewTodo(){
        navigate(`/todo/-1`)
    }
    return(
        <div className="container">
                {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                            {
                                todos.map(
                                    todo =>(
                                        <tr key={todo.id}>
                                            {/* <td>{todo.id}</td> */}
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            {/* <td>{todo.targetDate.toDateString()}</td> */}
                                            <td>{todo.targetDate.toString()}</td>
                                            <td><button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                            <td><button className="btn btn-primary" onClick={()=>updateTodo(todo.id)}>Update</button></td>

                                        </tr>
                                    )
                                )
                            }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5">
                <button className="btn btn-success" type="submit" onClick={addNewTodo}>
                    Create Todo
                </button>
            </div>
       </div>
    )
}