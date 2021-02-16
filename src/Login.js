import {useState} from "react"

function Login({ history, setUser, user }) {
    
   const[username, setUsername] = useState("")
   const[password, setPassword] = useState("")

   function handleLogin(e) {
      e.preventDefault()
    if(username == "EnriqueKim" && password == "123"){
        alert("You're logged in! Press home to see list of games!")
    }
    else {
        alert("Wrong username and password combination, try again scrub")
    }

      setUsername("")
      setPassword("")
   }
    
   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={handleLogin}>
            <label htmlFor="username">Username:</label>
            <input 
               type="text" 
               name="username" 
               value={username}
               onChange={ (e) => setUsername(e.target.value)}
            />
            <br></br>
            <label htmlFor="password">Password:</label>
            <input 
               type="text" 
               name="password" 
               value={password}
               onChange={ (e) => setPassword(e.target.value)}
            />
            <br></br>
            <button type="submit">Login</button>
         </form>
      </div>
   )
}

export default Login 