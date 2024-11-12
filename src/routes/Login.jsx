import React ,{useContext,useState}from 'react'
import { UserContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]= useState("davidsrm2004@gmail.com");
    const [password,setPasword]= useState("r3152273101");
    const {loginUser} =useContext(UserContext);
    const navega = useNavigate();


    const handleSubmitLogin=async (e)=>{
        console.log('data event ->_ :',e)
        e.preventDefault();
        try {
            await loginUser(email,password)
            console.log("usuario logueado");
            navega("/");
        } catch (error) {
            console.log(error.code)
            
        }

    }
  return (
    <>
    <div>
        <h1>Login</h1>
        <form  onSubmit={handleSubmitLogin}>
        <input type="email" name="" id="" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" name="" id=""placeholder='password' value={password} onChange={(e)=>setPasword(e.target.value)} />
        <button type="submit">Login</button>
    </form>
        
        </div>
    </>
    
  )
}

export default Login