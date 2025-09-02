import React, {useState, useEffect, useContext, use} from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()

//custom hook that acts as a convenient "key" to access all your authentication data and functions.
export function useAuth(){
    return useContext(AuthContext)
}
//makes data available to all components in your app.
export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState(nll)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [authUser, setAuthUser] = useState(null)
    
    // we would like to listen to the events when user logs in and logs out 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({...user})
            setIsLoggedIn(true)
        } else {
            setCurrentUser(null)
            setIsLoggedIn(false)
        }
        setLoading(false) // Done loading - we now know the auth state
    }


    // The "broadcast package" - everything we want to share
    const value = {
        currentUser,
        setCurrentUser,
        loading, 
      
        isLoggedIn, 
        setIsLoggedIn
    }

    return (
        //value is props 
        <AuthContext.Provider value={value}>{!loading && props.children}</AuthContext.Provider> // only show children when done loading, the loading has to be false 
    )
}

export default AuthContext