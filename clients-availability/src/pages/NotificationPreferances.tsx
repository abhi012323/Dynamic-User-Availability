import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the type for the notification preferences
interface NotificationPreferences {
    emailNotifications: boolean;
    smsNotifications: boolean;
}

const NotificationPreferences: React.FC = () => {
    const [emailNotifications, setEmailNotifications] = useState<boolean>(false);
    const [smsNotifications, setSmsNotifications] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Default to localhost if environment variable is not set
                const response = await axios.get<NotificationPreferences>(`${apiUrl}/api/notifications/preferences`);
                setEmailNotifications(response.data.emailNotifications);
                setSmsNotifications(response.data.smsNotifications);
            } catch (error) {
                setError('Error fetching notification preferences.');
                console.error('Error fetching notification preferences:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPreferences();
    }, []);

    const handleSavePreferences = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Default to localhost if environment variable is not set
            await axios.post(`${apiUrl}/api/notifications/preferences`, {
                emailNotifications,
                smsNotifications,
            });
            alert('Preferences saved!');
        } catch (error) {
            setError('Error saving preferences.');
            console.error('Error saving preferences:', error);
        }
    };

    return (
        <div>
            <h1>Notification Preferences</h1>
            {loading ? (
                <p>Loading preferences...</p>
            ) : (
                <>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={emailNotifications} 
                                onChange={() => setEmailNotifications(!emailNotifications)} 
                            />
                            Email Notifications
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={smsNotifications} 
                                onChange={() => setSmsNotifications(!smsNotifications)} 
                            />
                            SMS Notifications
                        </label>
                    </div>
                    <button onClick={handleSavePreferences}>Save Preferences</button>
                </>
            )}
        </div>
    );
};

export default NotificationPreferences;

