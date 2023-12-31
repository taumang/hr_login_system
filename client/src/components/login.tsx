import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Api from '../api/api.ts';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async () => {
    try {
      const response = await Api.post('http://localhost:5000/auth/login', { email, password });
      console.log('Login successful:', response);

    } catch (error) {
      console.error('Login failed:', error);
     
    }
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-edf2f7">
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Login</p>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="email">Email / Username</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={email}
                    placeholder="email@domain.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="md:col-span-1">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <Link to="/dashboard">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
