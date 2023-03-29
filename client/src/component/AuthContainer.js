import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import { useState } from 'react'

const AuthContainer = () => {

    const [showLogin, setshowLogin] = useState(true);
    
    const handleLogInSignUp = () => {
        setshowLogin(currentVal => !currentVal)
    }

  return (
    <div>
        <>
              {showLogin ? 
                <LogIn handleLogInSignUp={handleLogInSignUp} /> : 
                <SignUp handleLogInSignUp={handleLogInSignUp} /> }  
            </>
    </div>
  )
}

export default AuthContainer