import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

function Register() {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    Username: '',
    email: '',
    address: '',
    name_of: '',
    state: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    try {
      // Make an Axios POST request to your server with the form data
      const response = await api.post('/register', formData);
      console.log('Registration successful', response.data);

      // Redirect to another page or show a success message
    } catch (error) {
      console.error('Registration error', error);
      // Handle registration error (e.g., show an error message)
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
                  <p className="font-medium text-lg">Register</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                      onChange={handleInputChange}
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="Username">Username</label>
                      <input
                      onChange={handleInputChange}
                        type="text"
                        name="Username"
                        id="Username"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                      onChange={handleInputChange}
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label htmlFor="address">Telephone Number</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="address"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="name_of">Name of Manager</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        name="name_of"
                        id="name_of"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="state">Status</label>
                      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={handleInputChange}
                          name="state"
                          id="state"
                          placeholder="Status e.g Employed"
                          className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabIndex={-1}
                          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                        <button
                          tabIndex={-1}
                          htmlFor="show_more"
                          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            className="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        id="password"
                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="Password"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <Link to="/dashboard">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleRegistration}>Register</button>
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

export default Register;
