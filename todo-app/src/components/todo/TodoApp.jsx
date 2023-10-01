import './TodoApp.css'
import { BrowserRouter, Routes,Route,Navigate} from 'react-router-dom'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderCompnent'
import LoginComponent from './LoginComponent'
import WelocomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'


function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated === true){
        return children
    }
    return <Navigate to="/"/>

}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                        <Routes>
                            <Route path='/' element={<LoginComponent/>}/> 
                            <Route path='/login' element={<LoginComponent/>}/> 
                            <Route path='/welcome/:name' element={
                                <AuthenticatedRoute>
                                    <WelocomeComponent/>
                                </AuthenticatedRoute>
                                }/> 
                            <Route path='/todos' element={
                                 <AuthenticatedRoute>
                                     <ListTodosComponent/>
                                 </AuthenticatedRoute>
                                }/> 
                                <Route path='/todo/:id' element={
                                 <AuthenticatedRoute>
                                     <TodoComponent/>
                                 </AuthenticatedRoute>
                                }/> 
                            <Route path='/logout' element={
                                 <AuthenticatedRoute>
                                     <LogoutComponent/>
                                 </AuthenticatedRoute>
                                }/>                 
                            <Route path='*' element={<ErrorComponent/>}/>                   
                        </Routes>
                        <FooterComponent></FooterComponent>
                </BrowserRouter>
            </AuthProvider>
         </div>
    )
}
