import { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLoginSuccess }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Mock credentials organized by role
  const credentials = {
    owner: [
      { userId: 'admin123', password: 'password123' },
      { userId: 'owner1', password: 'ownerpass' }
    ],
    employee: [
      { userId: 'emp1', password: 'emppass' },
      { userId: 'employee42', password: 'emp42pass' }
    ],
    customer: [
      { userId: 'cust1', password: 'custpass' },
      { userId: 'guest', password: 'guestpass' }
    ]
  };

  const handleRoleChange = (role) => {
    setSelectedRole(selectedRole === role ? '' : role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    // Validation
    if (userId.trim() === '' || password.trim() === '') {
      setErrorMsg('Please fill out both ID and Password fields.');
      return;
    }

    if (selectedRole === '') {
      setErrorMsg('Please select your role (Owner, Employee, or Customer).');
      return;
    }

    if (userId.length < 4) {
      setErrorMsg('User ID must be at least 4 characters long.');
      return;
    }

    // Check credentials against selected role
    const allowed = (credentials[selectedRole] || []).some(
      (cred) => cred.userId === userId && cred.password === password
    );

    if (allowed) {
      setSuccessMsg(`Success! Logging you in as ${selectedRole.toUpperCase()}...`);
      setTimeout(() => {
        onLoginSuccess({ userId, role: selectedRole });
      }, 1500);
    } else {
      setErrorMsg('Invalid User ID or Password for the selected role.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Account Login</h2>
        
        {errorMsg && <div className="message error">{errorMsg}</div>}
        {successMsg && <div className="message success">{successMsg}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              placeholder="Enter your ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-group">
            <label><strong>Select your role:</strong></label>
            <label>
              <input
                type="checkbox"
                checked={selectedRole === 'owner'}
                onChange={() => handleRoleChange('owner')}
              />
              Owner
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedRole === 'employee'}
                onChange={() => handleRoleChange('employee')}
              />
              Employee
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedRole === 'customer'}
                onChange={() => handleRoleChange('customer')}
              />
              Customer
            </label>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
