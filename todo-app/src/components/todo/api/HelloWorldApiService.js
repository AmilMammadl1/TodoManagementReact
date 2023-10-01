import axios from "axios";
import { apiClient } from "./ApiClient";

// export default function retrieveHelloWorldBean(){
//     return(
//          axios.get('http://localhost:8080/hello-world-bean')
//     )
// }

export const retrieveHelloWorldBean = () => axios.apiClient('/hello-world-bean')
// export const retrieveHelloWorldPathVariable = (username,token) => apiClient.get(`/hello-world/path-variable/${username}`,{headers:{Authorization:token}})
export const retrieveHelloWorldPathVariable = (username,token) => apiClient.get(`/hello-world/path-variable/${username}`)
export const retrieveTodosPathVariable = (username) => apiClient.get(`/users/${username}/todos`)



