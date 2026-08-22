import { useState } from 'react';
import Auth from './Auth';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f4f6f8', padding: '20px' }}>
      {!user ? (
        <Auth onLogin={(userData) => setUser(userData)} />
      ) : (
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <h2>Dayflow HRMS</h2>
            <div>
              <span style={{ marginRight: '15px' }}><strong>{user.email}</strong> ({user.role})</span>
              <button onClick={handleLogout} style={{ padding: '6px 12px', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Logout
              </button>
            </div>
          </header>

          <main style={{ marginTop: '20px' }}>
            <h3>{user.role === 'HR' ? 'Admin / HR Dashboard' : 'Employee Dashboard'}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' }}>
              <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', textAlign: 'center' }}>
                <h4>Profile</h4>
                <p>View & Edit Details</p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', textAlign: 'center' }}>
                <h4>Attendance</h4>
                <p>Daily / Weekly Logs</p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', textAlign: 'center' }}>
                <h4>Leave Requests</h4>
                <p>Apply & Track Status</p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;