import { useState, useEffect, createContext } from "react";


const UserContext = createContext()

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => { // fetch authorized user
        const fetchCurrentUser = async () => {
            try {
                const resp = await fetch("/authorized")
                const data = await resp.json()
                if(resp.ok) {
                    setCurrentUser(data)
                    // do something else too ?
                } else {
                    // send some sort of error message if not logged in?
                }
                // console.log(currentUser)
            } catch (error) {
                alert(error)
            }
        }
        fetchCurrentUser()
    }, [setCurrentUser]);


    //useEffect fetch for user here

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserContext, UserProvider}