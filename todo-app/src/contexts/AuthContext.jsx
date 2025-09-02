import React, {useState, useEffect, useContext} from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

// Create a new context for authentication
const AuthContext = React.createContext()

/**
 * Custom hook to access authentication context
 * Provides easy access to auth state and functions throughout the app
 * @returns {Object} Authentication context value
 */
export function useAuth(){
    return useContext(AuthContext)
}

/**
 * AuthProvider component that wraps the app to provide authentication context
 * @param {Object} props - Component props (including children)
 */
export function AuthProvider(props) {
    // State management for authentication
    const [currentUser, setCurrentUser] = useState(null)         // Stores current user data
    const [isLoggedIn, setIsLoggedIn] = useState(false)        // Tracks login status
    const [loading, setLoading] = useState(true)               // Tracks initial auth loading state
   
    
    /**
     * Effect hook to handle Firebase authentication state changes
     * Sets up listener for auth state changes and cleanup on unmount
     */
    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        // Cleanup subscription on unmount
        return unsubscribe
    }, [])

    /**
     * Initializes user state when auth state changes
     * @param {Object} user - Firebase user object
     */
    async function initializeUser(user) {
        if (user) {
            // User is signed in
            setCurrentUser({...user})
            setIsLoggedIn(true)
        } else {
            // User is signed out
            setCurrentUser(null)
            setIsLoggedIn(false)
        }
        // Mark authentication loading as complete
        setLoading(false)
    }

    // Create value object with all context data
    const value = {
        currentUser,      // Current user object
        setCurrentUser,   // Function to update current user
        loading,         // Loading state
        isLoggedIn,      // Login status
        setIsLoggedIn    // Function to update login status
    }

    return (
        <AuthContext.Provider value={value}>
            {/* Only render children when initial auth state is determined */}
            {!loading && props.children}
        </AuthContext.Provider>
    )
}

// Export the context for direct usage if needed
export default AuthContext