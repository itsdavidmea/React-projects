import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../auth'
import './Login.css' // Add this import
import google_logo from '../../assets/google_logo.svg'


export function Login() {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }



    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome to David's Todo App</h2>
                
                {errorMessage && (
                    <div className="error-message">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={onSubmit} className="login-form">
                    

                   

                    

                    <button 
                        type="button"
                        onClick={onGoogleSignIn}
                        className="google-button"
                        disabled={isSigningIn}
                    >
                        <img src={google_logo} alt="" className='google-icon'/>
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login