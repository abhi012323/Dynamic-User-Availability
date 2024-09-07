import { useState } from 'react';
import axios from 'axios';
import AvailabilityForm from '../components/AvailabilityForm';
import './Home.css';

interface User {
  _id: string;
  email: string;
}

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState(''); // State for email input
  const [error, setError] = useState(''); // State for error messages
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Fallback to localhost if not set

  const loginUser = async (email: string) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/login`, // Use environment variable
        { email },
        { withCredentials: true } // Send credentials if required
      );
      setUser(response.data);
      setError(''); // Clear error message on successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in. Please check your email.');
      setUser(null); // Clear user state on error
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    loginUser(e.target.value);
  };

  return (
    <div className="container-home">
      <h1>Schedule Your Availability</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleBlur}
        className="form-control mb-3"
      />
      {/* Display error if login fails */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {/* Conditionally render AvailabilityForm if the user is logged in */}
      {user && <AvailabilityForm user={user._id} />}
    </div>
  );
}

export default Home;