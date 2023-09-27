import React,{useState} from 'react'
import _dashboard1 from '../Dashboard/_dashboard1';
import Authentication from 'K:/Main Drive/Projects/hr_login_system_CLONE/hr_login_system/src/router/authentication.ts'

function _full_auth() {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState('Employee'); 
  
    const handleSignUp = () => {
      
    };
  
    const handleSignIn = () => {
    
    };
  
    const handleSignOut = () => {
      
    };
  
    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRole(e.target.value);
    };
  return (
    <div>
        {!user ? (
        <div>
          <h2>Sign Up</h2>
          <input
            type="username"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <label>
              <input
                type="radio"
                value="Employee"
                checked={selectedRole === 'Employee'}
                onChange={handleRoleChange}
              />
              Employee
            </label>
            <label>
              <input
                type="radio"
                value="Management"
                checked={selectedRole === 'Management'}
                onChange={handleRoleChange}
              />
              Management
            </label>
          </div>
          <button onClick={handleSignUp}>Sign Up</button>

          <h2>Sign In</h2>
          <input
            type="username"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <div>
          <p>Welcome, {user.username} !</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default _full_auth