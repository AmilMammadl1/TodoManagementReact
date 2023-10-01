import {  useNavigate, useParams } from "react-router-dom";
import { createTodo, retrieveTodo, updateTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import {Form, Field, Formik, ErrorMessage } from "formik";


export default function TodoComponent(){


    const authContext = useAuth()
    const {id} = useParams()
    const navigate = useNavigate()



    const[description,setDescription] = useState('')
    const[targetDate,setTargetDate] = useState('')
    useEffect(()=>retrieveTodoMethod(),[id])



    function retrieveTodoMethod(){
        if(id!=-1){
            retrieveTodo(authContext.name,id)
                .then(response=>{
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)

            })
        }
    }
    function onSubmit(values){
       const todo = {
            id:id,
            username:authContext.name,
            description:values.description,
            targetDate:values.targetDate,
            done:false
        }

        if(id == -1){
            createTodo(authContext.name,todo)
            .then(
                 response => {navigate('/todos')})
        }
        else{
            updateTodo(authContext.name,id,todo)
            .then(navigate('/todos'))
        }
       
    }
    function validate(values) {
        let errors = {};
    
        if (values.description.length < 1) {
            errors.description = "invalid description";
        }
        
        if (values.targetDate === "" || values.targetDate === null ) {
            errors.targetDate = "invalid target date";
        }
    
        return errors;
    }
    
    
    return(
        <div className="container">
            <div>Welcome {authContext.name}</div>
            <div>
                <Formik initialValues={{description,targetDate}} enableReinitialize={true} onSubmit={onSubmit} validate={validate} validateOnChange={false} validateOnBlur={false}>
                    {
                        (props)=> (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-danger"

                                />
                               <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-danger"

                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }

                </Formik>
            </div>
        </div>
     
    )
    
}