import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doSignOut } from '../../auth'
import './Login.css'

export function SignOut() {
    const { setIsLoggedIn, setAuthUser, currentUser } = useAuth()

    const handleSignOut = async () => {
        try {
            await doSignOut()
            // Clear auth context
            setIsLoggedIn(false)
            setAuthUser(null)
        } catch (error) {
            console.error("Error signing out:", error)
        }
    }

    return (
        <div className='accountInformation'>
            <button 
            onClick={handleSignOut}
            className="signout-button"
        >
            Sign Out
        </button>
        <span> You are logged In as: {currentUser.displayName}</span>
        </div>
        
    )
}

export default SignOut