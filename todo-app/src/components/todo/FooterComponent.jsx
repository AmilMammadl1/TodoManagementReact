import { useContext } from "react"
import { useAuth } from "./security/AuthContext"
// import { AuthContext } from "./security/AuthContext"

export default function FooterComponent(){
    // const authContext = useContext(AuthContext)
    const authContext = useAuth()
    // console.log(authContext.number)
    return(
        <footer className='footer'>
            <div className="container">
              Footer
       </div>
        </footer>
        
    )
}