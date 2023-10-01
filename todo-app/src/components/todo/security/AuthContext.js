import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService, executeJwtAuthenticationService } from "../api/AuthenticationApiService";

 const AuthContext = createContext()
 export const useAuth = () => useContext(AuthContext)


 export default function AuthProvider({children}){
    const [number,setNumber] = useState(10)
    const [isAuthenticated,setAuthenticated] = useState(false)
    const [name,setName] = useState('')
    const [token,setToken] = useState(null)



    // function login(username,password){
    //     if(username === 'Amil' && password==='amil2003'){
    //         setAuthenticated(true)
    //         setName(username)
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         return false
    //     }
    // }
    // function logout(){
    //     setAuthenticated(false)
    // }

    // async function login(username,password){
    //     try{
            // const baToken = 'Basic ' + window.btoa(username + ':' +password)
            // const response = await executeBasicAuthenticationService(baToken)
            //     // .then(response => console.log(response))
            //     // .catch(error => console.log(error))



            // if(response.status == 200){
            //     setAuthenticated(true)
            //     setName(username)
            //     setToken(baToken)
            //     apiClient.interceptors.request.use(
            //          (config) => {
//                         config.headers.Authorization = baToken
//                         return config
//                         }
//                 )  
//                 return true
//             }
//             else{
//                 setAuthenticated(false)
//                 setName(null)
//                 setToken(null)
//                 return false
//             }
//            }catch(error){
//                 setAuthenticated(false)
//                 setName(null)
//                 setToken(null)
//                 return false
//            }
// }
async function login(username,password){
    try{
        const response = await executeJwtAuthenticationService(username,password)
            // .then(response => console.log(response))
            // .catch(error => console.log(error))
            



        if(response.status == 200){
            const jwtToken = 'Bearer ' + response.data.token

            setAuthenticated(true)
            setName(username)
            setToken(jwtToken)
            apiClient.interceptors.request.use(
                 (config) => {
                    config.headers.Authorization = jwtToken
                    return config
                    }
            )  
            return true
        }
        else{
            setAuthenticated(false)
            setName(null)
            setToken(null)
            return false
        }
       }catch(error){
            setAuthenticated(false)
            setName(null)
            setToken(null)
            return false
       }
}

    function logout(){
        setAuthenticated(false)
        setToken(null)
        setName(null)
    }

    // setInterval(()=>setNumber(number+5),600000)
    return(
        <AuthContext.Provider value={{number,isAuthenticated,login,logout,name,token}}>
            {children}
        </AuthContext.Provider>
    )
 }