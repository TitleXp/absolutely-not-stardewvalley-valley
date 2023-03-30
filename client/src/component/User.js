import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { Button, Card, Form, Image, Container } from 'semantic-ui-react'
import CompletedCard from './CompletedCard'

const User = () => {
  const history = useHistory()
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [completedPurchase, setCompletedPurchase] = useState([])

  useEffect(() => { 
    fetch('/completed')
      .then(res => res.json())
      .then(data => setCompletedPurchase(data))
  }, [])

  console.log('completed purchase',completedPurchase)

  const mappedCompleted = completedPurchase?.map(completed => (
    <CompletedCard {...completed} key={completed.id} />
  ))

  const { id, username, email, bio, age, purchases, profile_pic_link} = currentUser

  const [showEditBio, setShowEditBio] = useState(true)
  const [editBio, setEditBio] = useState({ bio })

  const [showEditPic, setShowEditPic] = useState(true)
  const [editPic, setEditPic] = useState({ profile_pic_link })

  const handleClickEditBio = () => {
    setShowEditBio(currentValue => !currentValue)
  }

  const handleChangeEditBio = (e) => {
    setEditBio(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
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

  const handleClickEditPic = (e) => {
    setShowEditPic(currentValue => !currentValue)
  }

  const handleChangeEditPic = (e) => {
    setEditPic(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmitPic = (e) => {
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPic)
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
          profile_pic_link: data.profile_pic_link
        }))
        setShowEditPic(true)
      })
      .catch(error => alert(error))
  }

  const handleDeleteUser = () => {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE"
    })
    setCurrentUser(null)
    history.push('/home')
  }

  return (
    <Container style={{ marginTop: '10em' }} >
      <Image src={profile_pic_link} size="medium" circular />
      {showEditPic ? (
                  <>
                    {/* <span>{profile_pic_link}</span> */}
                    <Button onClick={handleClickEditPic}>Change Profile Picture</Button>
                  </>
                ) : (
                  <Form onSubmit={handleSubmitPic}>
                    <Form.Input
                      name="profile_pic_link"
                      value={editPic.profile_pic_link}
                      onChange={handleChangeEditPic}
                      required
                    />
                    <Button.Group>
                      <Button color="green" type="submit">
                        Save
                      </Button>
                      <Button.Or />
                      <Button onClick={handleClickEditPic}>Cancel</Button>
                    </Button.Group>
                  </Form>
                )}
      
      <div className="user-info">
        <Card fluid>
          <Card.Content>
            <Card.Header>Username: {username}</Card.Header>
            <Card.Meta>Email: {email}</Card.Meta>
            <Card.Description>
              <div className="user-bio">
                <strong>Bio: </strong>
                {showEditBio ? (
                  <>
                    <span>{bio}</span>
                    <Button onClick={handleClickEditBio}>Edit</Button>
                  </>
                ) : (
                  <Form onSubmit={handleSubmitBio}>
                    <Form.Input
                      name="bio"
                      value={editBio.bio}
                      onChange={handleChangeEditBio}
                      required
                    />
                    <Button.Group>
                      <Button color="green" type="submit">
                        Save
                      </Button>
                      <Button.Or />
                      <Button onClick={handleClickEditBio}>Cancel</Button>
                    </Button.Group>
                  </Form>
                )}
              </div>
            </Card.Description>
            <Card.Meta>Age: {age}</Card.Meta>
          </Card.Content>
        </Card>
      </div>

      <div className="delete-user">
        <Button negative onClick={handleDeleteUser}>
          Delete User
        </Button>
      </div>

      <div className="purchase-history">
        <h3>Purchase history</h3>
        {mappedCompleted}
      </div>
    </Container>
  )
}

export default User