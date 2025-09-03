import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { doCreateUserWithEmailAndPassword } from '../../auth'
import './Register.css'

export function Register() {
    const navigate = useNavigate()
    const { setAuthUser, setIsLoggedIn } = useAuth()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords don't match")
            return
        }

        setIsRegistering(true)
        try {
            const result = await doCreateUserWithEmailAndPassword(formData.email, formData.password)
            setSuccessMessage('Account created successfully! Redirecting...')
            setErrorMessage('')
            setIsLoggedIn(true)
            setAuthUser(result.user)
            setTimeout(() => {
                navigate('/todos')  // Navigate to todos instead of login
            }, 2000)
        } catch (error) {
            setErrorMessage(error.message)
            setSuccessMessage('')
        } finally {
            setIsRegistering(false)
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Create an Account</h2>
                
                {errorMessage && (
                    <div className="error-message">
                        {errorMessage}
                    </div>
                )}
                
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={onSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={isRegistering}
                    >
                        {isRegistering ? 'Creating Account...' : 'Register'}
                    </button>

                    <span className='RegisterLink'>Already have an account? <Link to="/login">Sign In</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Register