import { useState, useContext } from "react"
import { UserContext } from "../context/userContext"
import { useHistory } from "react-router-dom"

const SignUp = ({ handleLogInSignUp }) => {
  
  const history = useHistory()

  const {setCurrentUser} = useContext(UserContext)

  const [newUser, setNewUser] =useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    age: "",
    profile_pic_link: ""
  })

  const handleSignUpChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then((res) => {
      if(res.ok) {
        res.json().then(newUserObj => {
          setCurrentUser(newUserObj)
          // history.push here
        })
      } else {
        res.json().then((error) => {
          alert(error)
        // set error message right here from errorContext
        })
      }
    })
    .catch((error) => alert(error))
  }

  return (
    <div> Sign up
      <br />
      <form onSubmit={handleSubmit}>
      <button onClick={handleLogInSignUp}> Already have an account? Log in! </button>
      <div>
        <input type="text" name="username" placeholder="UserName" onChange={handleSignUpChange} value={newUser.username} required />
      </div>

      <div>
        <input type="text" name="password" placeholder="Password" onChange={handleSignUpChange} value={newUser.password} required />
      </div>

      <div>
        <input type="text" name="email" placeholder="Email" onChange={handleSignUpChange} value={newUser.email} required />
      </div>

      <div>
        <input type="text" name="bio" placeholder="Something about yourself!" onChange={handleSignUpChange} value={newUser.bio}  />
      </div>

      <div>
        <input type="number" name="age" placeholder="Age" onChange={handleSignUpChange} value={newUser.age} required />
      </div>

      <div>
        <input type="link" name="profile_pic_link" placeholder="Profile Picture Link" onChange={handleSignUpChange} value={newUser.profile_pic_link}  />
      </div>

      <input type="submit" value="Create New User" />
      </form>

    </div>
  )
}

export default SignUp