import { useEffect, useState } from 'react';
import axios from 'axios';
import SessionOverview from '../components/SessionOverview';
import './Admin.css';

interface User {
  _id: string;
  email: string;
}

interface Availability {
  _id: string;
  start: string;
  end: string;
}

function Admin() {
  // Define state for users, selected user, and availability
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [availability, setAvailability] = useState<Availability[]>([]);

  // Get API URL from environment variables
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Fetch users from your own backend API
  useEffect(() => { 
    axios.get(`${apiUrl}/api/users`)  // Use the environment variable for the API URL
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, [apiUrl]);

  // Fetch availability for the selected user from your own backend API
  const fetchAvailability = async (userId: string) => {
    try {
      const response = await axios.get(`${apiUrl}/api/availability/${userId}`);  // Use the environment variable for the API URL
      setAvailability(response.data);
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  return (
    <div className="container-admin">
      <h1>Client Dashboard</h1>
      <select
        className="form-select"
        onChange={(e) => {
          const user = users[parseInt(e.target.value, 10)];
          setSelectedUser(user || null);
        }}
      >
        <option value="">Select User</option>
        {users.map((user, index) => (
          <option key={user._id} value={index.toString()}>
            {user.email}
          </option>
        ))}
      </select>

      <button
        className="btn btn-primary mt-3"
        onClick={() => selectedUser && fetchAvailability(selectedUser._id)}
        disabled={!selectedUser}
      >
        View Availability
      </button>

      {availability.length > 0 && <SessionOverview availability={availability} />}
    </div>
  );
}

export default Admin;