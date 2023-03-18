import { useState, useEffect, createContext } from "react";


const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);


    //useEffect fetch for user here

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserContext, UserProvider}