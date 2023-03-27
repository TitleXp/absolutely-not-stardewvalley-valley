import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import CompletedCard from './CompletedCard'

const User = () => {

  const history = useHistory()
  const {currentUser, setCurrentUser} = useContext(UserContext)
  // console.log('currentUser', currentUser)
  const [completedPurchase, setCompletedPurchase] = useState([])

  useEffect(() => { 
    fetch('/purchases')
    .then(res => res.json())
    .then(data => setCompletedPurchase(data))
  }, [])

  console.log('completed purchase', completedPurchase)

  const mappedCompleted = completedPurchase?.map(completed => (
    <CompletedCard {...completed} key={completed.id} />
    
  ))

  console.log('mapped completed', mappedCompleted)

  const { id, username, email, bio, age, purchases, profile_pic_link} = currentUser


  const [showEditUsername, setShowEditUsername] = useState(true)
  const [editUsername, setEditUsername] = useState({
    username: username
  })

  const [showEditEmail, setShowEditEmail] = useState(true)
  const [editEmail, setEditEmail] = useState({
    email: email
  })

  const [showEditBio, setShowEditBio] = useState(true)
  const [editBio, setEditBio] = useState({
    bio: bio
  })

  const [showEditAge, setShowEditAge] = useState(true)
  const [editAge, setEditAge] = useState({
    age: age
  })

  const [showEditPic, setShowEditPic] = useState(true)
  const [editPic, setEditPic] = useState({
    profile_pic_link: profile_pic_link
  })

  const handleClickEditUsername = () => {
    setShowEditUsername(currentValue => !currentValue)
  }

  const handleChangeEditUsername = (e) => {
    setEditUsername({...editUsername, [e.target.name]: e.target.value})
  }

  const handleClickEditEmail = () => {
    setShowEditEmail(currentValue => !currentValue)
  }

  const handleChangeEditEmail = (e) => {
    setEditEmail({...editEmail, [e.target.name]: e.target.value})
  }

  const handleClickEditBio = () => {
    setShowEditBio(currentValue => !currentValue)
  }

  const handleChangeEditBio = (e) => {
    setEditBio({...editBio, [e.target.name]: e.target.value})
  }

  const handleClickEditAge = () => {
    setShowEditAge(currentValue => !currentValue)
  }

  const handleChangeEditAge = (e) => {
    setEditAge({...editAge, [e.target.name]: e.target.value})
  }

  const handleClickEditPic = () => {
    setShowEditPic(currentValue => !currentValue)
  }

  const handleChangeEditPic = (e) => {
    setEditPic({...editPic, [e.target.name]: e.target.value})
  }

  const handleSubmitBio = (e) => {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBio)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      // setError message here
    })
    .then(data => {
      setCurrentUser(prevState => ({
        ...prevState,
        bio: data.bio
      }))
      setShowEditBio(true)
    })
    .catch(error => alert(error))
  }

  const handleDeleteUser = () => {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE"
    })
    setCurrentUser(null)
    history.push('/loginsignup')
  }

  return (
    <div>User
      <img src={profile_pic_link} width="200" height="200"></img>

      <div>
      Username: {username}
      {/* <button>edit</button> */}
      <br />
      Email: {email}
      {/* <button>edit</button> */}
      <br />
      Bio: {bio}
      {showEditBio ? 
      <button onClick={handleClickEditBio}>edit</button> :
      <>
        <button onClick={handleClickEditBio}>cancel edit</button>
        <form onSubmit={handleSubmitBio}>
          <input type="text" name="bio" value={editBio.bio} onChange={handleChangeEditBio}></input>
          <input type="submit" value="change bio"></input>
        </form>
      </>
      }
      
      <br />
      Age: {age}
      {/* <button>edit</button> */}
      </div>

      <div>
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>


      <div>
      Purchase history

      {mappedCompleted}
      </div>

    </div>
   
  )
}

export default User