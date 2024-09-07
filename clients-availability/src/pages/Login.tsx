import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface ErrorResponse {
  message: string;
}

function Login() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Fallback to localhost if not set

  const loginUser = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/login`, // Use environment variable
        { email },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const userData = response.data;
        console.log('Login successful:', userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/home');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        const responseData = error.response.data as ErrorResponse;
        setError(responseData.message || 'Login failed. Please check your email.');
      } else if (error.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="container-login">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-3"
      />
      <button className="btn btn-primary" onClick={loginUser}>
        Login
      </button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default Login;

