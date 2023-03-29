import { useContext } from 'react';
import { Container, Header, Image, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const LandingPage = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className='landing-page'>
      <Container style={{ marginTop: '8.5em' }} textAlign='center' text>
      <img src="https://i.imgur.com/rHEZqK5.png" width={700} />
        <Segment textAlign='center'>
          <Header as='h1'>Welcome to Absolutely-not-StarDewValley</Header>
          <p>This is a StarDew Valley themed E-commerce (SPA) website where you'll find many familar faces and products from the game.</p>
          <p>This project is made with ReactJS (frontend), Ruby on Rails (backend), and Stripe for payment services.</p>
          <p><a href='https://github.com/TitleXp/absolutely-not-stardewvalley-valley'>Here is the link to this project repo on GitHub!</a></p>
          <p><a href='https://github.com/TitleXp'>Here's a link to my GitHub!</a></p>
          <p>Created by Surapat Mekvanich</p>
          {currentUser === null ? (
            <p>
              Feel free to demo by{' '}
              <Link to='/loginsignup' style={{ fontWeight: 'bold' }}>
                Login or Sign up
              </Link>{' '}
              here!
            </p>
          ) : null}
          <br />
        </Segment>
          <Button.Group>
            <Button as={Link} to='/farms' color='green'>View Farms</Button>
            <Button as={Link} to='/products' color='teal'>View Products</Button>
          </Button.Group>
      </Container>
    </div>
  )
}

export default LandingPage;