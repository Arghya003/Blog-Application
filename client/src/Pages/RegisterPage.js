import React, { useState } from 'react'

const RegisterPage = () => {
  const[username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  async function register(e){
    e.preventDefault();
    const response= await fetch("http://localhost:8000/register",{
      method:"POST",
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':"application/json"}
    })
      if(response===200){
        alert('registration succesful');

      }
      else{
        alert('registarion failed')
      }
  }
  return (
    <div>
      <form className="register"
      onSubmit={register}>
        <h1>Register</h1>
        <input type="text"
        value={username}
        placeholder="username"
        onChange={e=>setUsername(e.target.value)}>

        </input>
        <input type="text"
         placeholder="password"
         onChange={e=>setPassword(e.target.value)}>

         </input>
        <button>
            Register
        </button>
        </form>
    </div>
  )
}

export default RegisterPage
