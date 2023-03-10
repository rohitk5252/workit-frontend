import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error, isSuccess } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password)
    }

  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>Email: </label>
        <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} />

        <label>Password: </label>
        <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />

        <button disabled={isLoading}>Sign up</button>
        {isLoading && <div className='loading' style={{textAlign:'center' , fontWeight:'bold'}}>Signing Up ...</div>}
        {error && <div className='error'>{error}</div> }
        {isSuccess && <div className='success'>Signed up sucessfully</div>}
    </form>
  )
}

export default Signup