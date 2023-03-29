import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { ErrorContext } from "../context/errorContext"
import { Form, Button, Message, Container } from 'semantic-ui-react'

const SignUp = ({ handleLogInSignUp, userId, setPurchaseId, setUserId }) => {

  const history = useHistory()

  const {currentUser, setCurrentUser} = useContext(UserContext)
  const {error, setError} = useContext(ErrorContext)

  // console.log('signup level userId', userId )


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

  const createPurchaseId = (userId) => {
    // create new purchase for that user (empty cart)
    fetch('/purchases', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId
      }),
    })
    .then((res) => {
      if(res.ok) {
        res.json().then(purchaseObj => {
          setPurchaseId(purchaseObj.id)
        })
      } else {
        console.log("could not create purchaseID")
      }
      // res.json().then(
      //   // some error message here
      // )
    })
    .catch((error) => alert(error))
    
  }

  const handleSubmit = (e) => { // create new user
    e.preventDefault()

    // create new user
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
          // setUserId(newUserObj)
          createPurchaseId(newUserObj.id)
          console.log('new user id', newUserObj.id)
          history.push('/farms')
          // history.push here
        })

      } else {

        res.json().then((errorArr) => {
          // alert(errorArr.errors) // this works
          // console.log('error', errorArr.errors[0])
          setError({text: errorArr.errors.join('. '), type: ""})
        })

        // .then(productObj => setCart(currentVal => [productObj, ...currentVal]))


        // res.json().then(errorObj => {
        //   if (typeof(errorObj.error) === 'string') {
        //     setError({text: errorObj.error, type: ""})
        //   } else {
        //     setError(errorObj.error)
        //   }
        // })
      }
    })
    .catch((error) => alert(error))
  }

  // console.log('new user', newUser)
  // console.log('current User', currentUser)

  return (
    <Container textAlign='center'>
      <Form onSubmit={handleSubmit} style={{ marginTop: '10em' }}>
      <img src="https://i.imgur.com/rHEZqK5.png" width={700} />
      <h2>Sign up</h2>
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

    </Container>
  )
}

export default SignUp