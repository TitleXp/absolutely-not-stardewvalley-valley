import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { ErrorContext } from "../context/errorContext"
import { Form, Button, Message } from 'semantic-ui-react'

const SignUp = ({ handleLogInSignUp }) => {

  const history = useHistory()

  const {setCurrentUser} = useContext(UserContext)
  const {error, setError} = useContext(ErrorContext)

  const [newUser, setNewUser] = useState({
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
          history.push('/farms')
          // history.push here
        })
      } else {
        // res.json().then((error) => {
        //   alert(error)
        // })
        res.json().then(errorObj => {
          if (typeof(errorObj.error) === 'string') {
            setError({text: errorObj.error, type: ""})
          } else {
            setError(errorObj.error)
          }
        })
      }
    })
    .catch((error) => alert(error))
  }

  return (
    <div>
      <h2>Sign up</h2>
      <Form onSubmit={handleSubmit}>
        <Button onClick={handleLogInSignUp}>Already have an account? Log in!</Button>
        <Form.Field>
          <label>Username</label>
          <input type="text" name="username" placeholder="Username" onChange={handleSignUpChange} value={newUser.username} required />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" onChange={handleSignUpChange} value={newUser.password} required />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" onChange={handleSignUpChange} value={newUser.email} required />
        </Form.Field>
        <Form.Field>
          <label>Something about yourself!</label>
          <input type="text" name="bio" placeholder="Bio" onChange={handleSignUpChange} value={newUser.bio} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="number" name="age" placeholder="Age" onChange={handleSignUpChange} value={newUser.age} required />
        </Form.Field>
        <Form.Field>
          <label>Profile Picture Link</label>
          <input type="text" name="profile_pic_link" placeholder="Profile Picture Link" onChange={handleSignUpChange} value={newUser.profile_pic_link} />
        </Form.Field>
        <Button type="submit">Create New User</Button>
      </Form>
      {error && <Message negative>{error.text}</Message>}

    </div>
  )
}

export default SignUp