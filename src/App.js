import React, {useState} from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App(){
  const[isLogin, setIsLogin]=useState(true);

  return(
    <>
     {isLogin ? (
      <Login swithToSignup={()=>setIsLogin(false)}/>
     ) : (
      <Signup swithToLogin={()=> setIsLogin(true)}/>
     )}
      
    </>
  );
}

export default App;