import { useContext, useEffect, useId, useState } from 'react'; 
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';

// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js'

import NavBar from './component/NavBar';
import Notification from './component/Notification';
import SignUp from './component/SignUp';
import LogIn from './component/LogIn';
import User from './component/User';
import FarmContainer from './component/FarmsContainer'
import AllProductsContainer from './component/AllProductsContainer';
import ProductsFromFarmContainer from './component/ProductsFromFarmContainer'
import FruitsContainer from './component/FruitsContainer'
import VegetablesContainer from './component/VegetablesContainer'
import CartContainer from './component/CartContainer'
// import ShippingForm from './component/ShippingForm'

import { UserContext } from './context/userContext';
import { ErrorContext } from './context/errorContext';

function App() {

  // useContext info
  const {currentUser, setCurrentUser} = useContext(UserContext) 
  const {error, setError} = useContext(ErrorContext)


  // const { id } = currentUser
  const id = currentUser?.id
  // grabbing userId for the purchaseId
  const [userId, setUserId] = useState({
    user_id: id
  })

  // setting purchaseId
  const [purchaseId, setPurchaseId] = useState([])


  // console.log('app level currentUser', currentUser)
  // console.log('current user id', currentUser.id)
  console.log('app level userId', userId)
  console.log('app level purchaseID',purchaseId)
  console.log('app level current user ID', id)


  const [showLogin, setshowLogin] = useState(true);

  // const isAdmin = currentUser.admin
  const handleLogInSignUp = () => {
      setshowLogin(currentVal => !currentVal)
  }


  
  useEffect(() => {
    fetch('/purchases')
    .then(res => res.json())
    .then(data => setPurchaseId(data))
  }, [])

  
  if(!currentUser) { // what does the public sees/do?
    return(
      <div>
        <NavBar />
        <Notification />
      
        <Switch>

          <Route exact path="/loginsignup" >
            <>
              {showLogin ? 
                <LogIn handleLogInSignUp={handleLogInSignUp} /> : 
                <SignUp handleLogInSignUp={handleLogInSignUp} userId={userId} setPurchaseId={setPurchaseId} setUserId={setUserId} /> }  
            </>
          </Route>

          <Route exact path="/farms">
            <FarmContainer />
          </Route>

          <Route exact path="/farms/:id">
            <ProductsFromFarmContainer />
          </Route>

          <Route exact path="/products">
            <AllProductsContainer />
          </Route>

          <Route exact path="/fruits">
            <FruitsContainer />
          </Route>

          <Route exact path="/vegetables">
            <VegetablesContainer />
          </Route>

          {/* <Route exact path="/"> //save as template
            < />
          </Route> */}

        </Switch>

      </div>
    )
  }
  
  if(currentUser.admin === true) { // if the user is admin
    return(
      <div>
        <NavBar />
        <Switch>

          <Route exact path="/profile" >
            <User />
          </Route>

          {/* <Route exact path="/loginsignup" >
            <>
              <LogIn />
              <SignUp />
            </>
          </Route> */}

          <Route exact path="/farms">
            <FarmContainer />
          </Route>

          <Route exact path="/products">
            <AllProductsContainer />
          </Route>

          <Route exact path="/fruits">
            <FruitsContainer />
          </Route>

          <Route exact path="/vegetables">
            <VegetablesContainer />
          </Route>

          <Route exact path="/cart">
            <CartContainer />
          </Route>

          {/* <Route exact path="/checkout"> 
            <ShippingForm />
          </Route> */}

          {/* <Route exact path="/"> //save as template
            < />
          </Route> */}

        </Switch>
      </div>

    )
  }

  return ( // what additional things can users do?
  <div>
        <NavBar />
        <Notification />
        <Switch>

          <Route exact path="/profile" >
            <User />
          </Route>

          <Route exact path="/farms">
            <FarmContainer />
          </Route>

          <Route exact path="/farms/:id">
            <ProductsFromFarmContainer />
          </Route>

          <Route exact path="/products">
            <AllProductsContainer purchaseId={purchaseId} />
          </Route>

          <Route exact path="/fruits">
            <FruitsContainer />
          </Route>

          <Route exact path="/vegetables">
            <VegetablesContainer />
          </Route>

          <Route exact path="/cart">
            <CartContainer purchaseId={purchaseId} userId={userId} setPurchaseId={setPurchaseId} />
          </Route>

          {/* <Route exact path="/checkout"> 
            <Elements stripe={stripePromise}>
              <ShippingForm />
            </Elements>
          </Route> */}

          {/* <Route exact path="/checkout"> 
            <ShippingForm />
          </Route> */}


          

          {/* <Route exact path="/"> //save as template
            < />
          </Route> */}

        </Switch>
      </div>
  );
}

export default App;
