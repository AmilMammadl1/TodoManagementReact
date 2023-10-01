import axios from "axios";
import { apiClient } from "./ApiClient";


export const retrieveAllTodosForUsername = (username) => apiClient.get(`/users/${username}/todos`)
export const retrieveDeleteTodosById = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const retrieveTodo = (username,id) => apiClient.get(`/users/${username}/todos/${id}`)
export const updateTodo = (username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)
export const createTodo = (username,todo2) => apiClient.post(`/users/${username}/todos`,todo2)
// export const executeBasicAuthenticationService = (token) => apiClient.get(`/basicauth`,{headers:{Authorization:token}})







