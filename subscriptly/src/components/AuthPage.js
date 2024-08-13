import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';


const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      // Signup Logic
      const newUser = { name, email, password };
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert('Signup successful!');
      }
    } else {
      // Signin Logic
      const response = await fetch(`http://localhost:5000/users?name=${name}`);
      const users = await response.json();

      if (users.length > 0 && users[0].password === password) {
        alert('Signin successful!');
        navigate('/home');
      } else {
        // Display alert message for wrong credentials
        alert('Wrong name or password. Please try again.');
      }
    }

    // Clear form
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>{isSignup ? 'Signup' : 'Signin'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='input1'>Name:</label>
          <input
            type="text"
            placeholder='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {isSignup && (
          <div>
            <label className='input2'>Email:</label>
            <input
              type="email"
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label className='input3'>Password:</label>
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{isSignup ? 'Signup' : 'Signin'}</button>
      </form>
      <p>
        {isSignup ? 'Already have an account?' : 'New here?'}
        <button onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Signin' : 'Signup'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
