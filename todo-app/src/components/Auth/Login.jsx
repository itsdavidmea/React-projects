import { Link, useNavigate } from 'react-router-dom' 
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../auth'
import './Login.css' // Add this import
import google_logo from '../../assets/google_logo.svg'


export function Login() {
    const navigate = useNavigate() // Add this hook
    const { setAuthUser, setIsLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            try {
                const result = await doSignInWithEmailAndPassword(email, password)
                setIsLoggedIn(true)
                setAuthUser(result.user)
                navigate('/todos') // Navigate to todos page after successful login
            } catch (error) {
                setErrorMessage(error.message)
            } finally {
                setIsSigningIn(false)
            }
        }
    }

    const onGoogleSignIn = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            try {
                const result = await doSignInWithGoogle()
                setIsLoggedIn(true)
                setAuthUser(result.user)
                navigate('/todos')
            } catch (error) {
                setErrorMessage(error.message)
            } finally {
                setIsSigningIn(false)
            }
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

                    <h6 className='registerLink'>
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </h6>
                </form>
            </div>
        </div>
    )
}

export default Login