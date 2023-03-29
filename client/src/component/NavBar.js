import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

const NavBar = () => {
  const history = useHistory()
  const { currentUser, setCurrentUser } = useContext(UserContext)

  const handleLogOut = (e) => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null)
        history.push('/loginsignup');
      } else {
        res.json().then(error => alert(error))
      }
    })
  }

  if (!currentUser) {
    return (
      <Menu fluid inverted size='huge'>
        
        <Menu.Item as={NavLink} to='/farms'>Farms</Menu.Item>

        <Dropdown item text='Products'>
          <Dropdown.Menu>
            
            <Dropdown.Item as={Link} to='/products'>All Products</Dropdown.Item>
            <Dropdown.Item as={Link} to='/fruits'>Fruits</Dropdown.Item>
            <Dropdown.Item as={Link} to='/vegetables'>Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/loginsignup'>LogIn/SignUp</Menu.Item>
        </Menu.Menu>


      </Menu>
    )
  }

  if (currentUser.admin === true) {
    return (
      <Menu fluid inverted size='huge'>
        <Menu.Item as={NavLink} to='/farms'>Farms</Menu.Item>

        <Dropdown item text='Products'>
          <Dropdown.Menu>
            
            <Dropdown.Item as={Link} to='/products'>All Products</Dropdown.Item>
            <Dropdown.Item as={Link} to='/fruits'>Fruits</Dropdown.Item>
            <Dropdown.Item as={Link} to='/vegetables'>Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as={NavLink} to='/profile'>User</Menu.Item>

        <Menu.Item as={NavLink} to='/cart'>Cart</Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item text={`Welcome, ${currentUser.username}`}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogOut}>Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }

  return (
    <Menu fluid inverted size='huge'>
      <Menu.Item as={NavLink} to='/farms'>Farms</Menu.Item>

      <Dropdown item text='Products'>
          <Dropdown.Menu>
            
            <Dropdown.Item as={Link} to='/products'>All Products</Dropdown.Item>
            <Dropdown.Item as={Link} to='/fruits'>Fruits</Dropdown.Item>
            <Dropdown.Item as={Link} to='/vegetables'>Vegetables</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      <Menu.Item as={NavLink} to='/profile'>User</Menu.Item>

      <Menu.Item as={NavLink} to='/cart'>Cart</Menu.Item>

      <Menu.Menu position='right'>
        <Dropdown item text={`Welcome, ${currentUser.username}`}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={handleLogOut}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar