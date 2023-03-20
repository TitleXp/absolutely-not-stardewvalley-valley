import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/userContext"



const LogIn = ({ handleLogInSignUp }) => {

  const history = useHistory()

  const {setCurrentUser} = useContext(UserContext)

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const handleLogInChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(userObj => {
          setCurrentUser(userObj)
          // do something else too? think about history.push here
        })
      } else {
        res.json().then(errorObj => alert(errorObj.error))
        // useError context here instead of alert
      }
    })
    .catch(error => alert(error))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> Log in
      <br />

      <button onClick={handleLogInSignUp}> Sign Up! </button>
      <div>
        <input type="text" onChange={handleLogInChange} value={user.username} name="username" placeholder="UserName" required />
      </div>
        
      <div>
        <input type="password" onChange={handleLogInChange} value={user.password} name="password" placeholder="Password" required />
      </div>

      <input type="submit" value="Login" />

      </form>
    </div>
  )
}

export default LogIn