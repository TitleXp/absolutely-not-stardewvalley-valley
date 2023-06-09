import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { ErrorContext } from "../context/errorContext"
import { Form, Button, Message, Container } from 'semantic-ui-react'

const LogIn = ({ handleLogInSignUp }) => {

  const history = useHistory()

  const {setCurrentUser} = useContext(UserContext)
  const {error, setError} = useContext(ErrorContext)

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
          history.push('/farms')
          // do something else too? think about history.push here
        })
      } else {
        // res.json().then(errorObj => alert(errorObj.error))
        // useError context here instead of alert
        res.json().then(errorObj => {
          if (typeof(errorObj.error) === 'string') {
            setError({text: errorObj.error, type: ""})
          } else {
            setError(errorObj.error)
          }
        })
      }
    })
    .catch(error => alert(error))
  }

  return (
    <Container style={{ marginTop: '10em' }}  textAlign='center' >
      <img src="https://i.imgur.com/rHEZqK5.png" width={700} />
      <Button onClick={handleLogInSignUp}> No account? Sign Up! </Button>
      <Form onSubmit={handleSubmit} style={{ marginTop: '10em' }}>
        <h2>Log in</h2>
        <Form.Input 
          type="text" 
          onChange={handleLogInChange} 
          value={user.username} 
          name="username" 
          placeholder="UserName" 
          required 
        />
        <Form.Input 
          type="password" 
          onChange={handleLogInChange} 
          value={user.password} 
          name="password" 
          placeholder="Password" 
          required 
        />
        <Button type="submit">Login</Button>
      </Form>
      {error && <Message negative>{error.text}</Message>}
    </Container>
  )
}

export default LogIn