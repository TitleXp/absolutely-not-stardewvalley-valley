import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const NavBar = () => {

  const history = useHistory()
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const handleLogOut = (e) => { // delete session/logout
    fetch("/logout", {
       method: "DELETE", }
       ).then((res) => {
      if (res.ok) {
        setCurrentUser(null)
        history.push('/loginsignup');
      } else {
        res.json()
        .then(error => alert(error))
      }
    });
  }

  if(!currentUser) {
    return(
      <nav>
        <NavLink activeStyle= {{ color: "blue" }} to="/loginsignup">LogIn/SignUp</NavLink>
        <NavLink activeStyle= {{ color: "blue" }} to="/farms">Farms</NavLink>
        <NavLink activeStyle= {{ color: "blue" }} to="/products">Products</NavLink>
        <NavLink activeStyle= {{ color: "blue" }} to="/fruits">Fruits</NavLink>
        <NavLink activeStyle= {{ color: "blue" }} to="/vegetables">Vegetables</NavLink>
      </nav>

    )
  }

  return (
    <nav>
    <NavLink activeStyle= {{ color: "blue" }} to="/farms">Farms</NavLink>
    <NavLink activeStyle= {{ color: "blue" }} to="/products">Products</NavLink>
    <NavLink activeStyle= {{ color: "blue" }} to="/fruits">Fruits</NavLink>
    <NavLink activeStyle= {{ color: "blue" }} to="/vegetables">Vegetables</NavLink>
    <button onClick={handleLogOut}> Sign Out </button>
  </nav>
  )
}

export default NavBar
