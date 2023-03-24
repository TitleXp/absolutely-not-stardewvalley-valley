import { useContext } from 'react'
import { UserContext } from '../context/userContext'

const User = () => {

  const {currentUser} = useContext(UserContext)

  console.log('currentUser', currentUser)


  const { username, email, bio, age, purchases, profile_pic_link} = currentUser

  return (
    <div>User
      <img src={profile_pic_link}></img>

      <div>
      Username: {username}
      <br />
      Email: {email}
      <br />
      Bio: {bio}
      <br />
      Age: {age}
      </div>

      <div>
      Purchase history

      {purchases.is_purchased}
      </div>

    </div>
   
  )
}

export default User