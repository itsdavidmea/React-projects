import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../auth';


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

    // Clean functions without event handling
    const handleLogin = () => {
        setIsLoggedIn(true);
        setAuthUser({ Name: 'John Doe' });
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setAuthUser(null);
    }

    return (
        <>
            <span>
                User is currently: {isLoggedIn ? 'logged in' : 'logged out'}
            </span>

            {isLoggedIn ? (
                <span>User Name: {authUser?.Name}</span>
            ) : null}

            <br />

            {isLoggedIn ? (
                <button onClick={handleLogout}>
                    Log Out
                </button>
            ) : (
                <button onClick={handleLogin}>
                    Log In
                </button>
            )}
        </>
    );
}

export default Login