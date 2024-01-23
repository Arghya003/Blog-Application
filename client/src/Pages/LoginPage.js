import React,{useState} from 'react'

const LoginPage = () => {
   const[username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  async function login(e){
    e.preventDefault();
    const response= await fetch("http://localhost:8000/login",{
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
  return (
    <div>
      <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Login</button>
      </form>
    </div>
  );
}
}

export default LoginPage
